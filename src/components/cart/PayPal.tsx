'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  ReactPayPalScriptOptions,
} from '@paypal/react-paypal-js';
import { capturePayPalOrder } from '@/actions/capturePayPalOrder';
import { CartItem } from '@prisma/client';
import { DeliveryMethod, ExtendedCartItem } from '@/components/cart/Cart';
import { createPayPalOrder } from '@/actions/createPayPalOrder';
import { redirect } from 'next/navigation';

// Renders errors or successfull transactions on the screen.
function Message({ content }: { content: string }) {
  return <p>{content}</p>;
}

export type PayPalCartItem = {
  id: string;
  quantity: number;
};

export type PayPalProps = {
  cart: ExtendedCartItem[];
  deliveryMethod: string;
};

export default function PayPal({ cart, deliveryMethod }: PayPalProps) {
  const deliveryMethodRef = useRef<string>(deliveryMethod);
  const cartRef = useRef<ExtendedCartItem[]>(cart);
  const [completedOrder, setCompletedOrder] = useState(false);

  useEffect(() => {
    if (completedOrder) {
      redirect('account/orders');
    }
  }, [completedOrder]);

  useEffect(() => {
    deliveryMethodRef.current = deliveryMethod;
  }, [deliveryMethod]);

  useEffect(() => {
    cartRef.current = cart;
  }, [cart]);

  const initialOptions: ReactPayPalScriptOptions = {
    clientId:
      'Ab2QuptRuIu2i6LW7NhlMk6lPDXB5cWocgYkyZ7thBaQf-ZO_1iEOUvEZdPFWvLEWLrIv-VZBx4Bw9wJ',
    'enable-funding': 'venmo',
    'disable-funding': 'paylater,card',
    'data-sdk-integration-source': 'integrationbuilder_sc',
  };

  const [message, setMessage] = useState('');

  return (
    <div className="">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
          }}
          createOrder={async () => {
            try {
              const response = await createPayPalOrder(
                cartRef.current,
                deliveryMethodRef.current,
              );
              const status = response.status;
              const orderData = response.message;

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await capturePayPalOrder(data.orderID);
              const orderData = response.message;

              // Three cases to handle:
              //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              //   (2) Other non-recoverable errors -> Show a failure message
              //   (3) Successful transaction -> Show confirmation or thank you message

              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === 'INSTRUMENT_DECLINED') {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
              } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                throw new Error(
                  `${errorDetail.description} (${orderData.debug_id})`,
                );
              } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');

                // updatePayPalOrder(orderData);

                // const transaction =
                //   orderData.purchase_units[0].payments.captures[0];
                // setMessage(
                //   `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                // );
                // console.log(
                //   'Capture result',
                //   orderData,
                //   JSON.stringify(orderData, null, 2),
                // );

                setCompletedOrder(true);
              }
            } catch (error) {
              console.error(error);
              setMessage(
                `Sorry, your transaction could not be processed...${error}`,
              );
            }
          }}
        />

        {/* <PayPalButtons
          style={{ layout: 'vertical', color: 'gold' }}
          fundingSource="paypal"
          createOrder={(data, actions) => {
            // Create order logic for PayPal
          }}
          onApprove={(data, actions) => {
            // Handle approval for PayPal
          }}
        /> */}

        {/* Venmo Button */}
        {/* <PayPalButtons
          style={{ layout: 'vertical', color: 'blue' }}
          fundingSource="venmo"
          createOrder={(data, actions) => {
            // Create order logic for Venmo
          }}
          onApprove={(data, actions) => {
            // Handle approval for Venmo
          }}
        /> */}
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}
