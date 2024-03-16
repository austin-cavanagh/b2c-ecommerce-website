'use client';

import React, { useState } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  ReactPayPalScriptOptions,
} from '@paypal/react-paypal-js';
import { createPayPalOrder } from './createPayPalOrder';
import { capturePayPalOrder } from '@/actions/capturePayPalOrder';

// Renders errors or successfull transactions on the screen.
function Message({ content }: { content: string }) {
  return <p>{content}</p>;
}

export type PayPalCartItem = {
  id: string;
  quantity: number;
};

export default function PayPal() {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId:
      'Ab2QuptRuIu2i6LW7NhlMk6lPDXB5cWocgYkyZ7thBaQf-ZO_1iEOUvEZdPFWvLEWLrIv-VZBx4Bw9wJ',
    'enable-funding': 'venmo',
    'disable-funding': 'paylater,card',
    'data-sdk-integration-source': 'integrationbuilder_sc',
  };

  const [message, setMessage] = useState('');

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: 'rect',
            layout: 'vertical',
          }}
          createOrder={async () => {
            try {
              const cart: PayPalCartItem[] = [
                {
                  id: 'YOUR_PRODUCT_ID',
                  quantity: 1,
                },
              ];

              const response = await createPayPalOrder(cart);
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
              const status = response.status;
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
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];
                setMessage(
                  `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                );
                console.log(
                  'Capture result',
                  orderData,
                  JSON.stringify(orderData, null, 2),
                );
              }
            } catch (error) {
              console.error(error);
              setMessage(
                `Sorry, your transaction could not be processed...${error}`,
              );
            }
          }}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}
