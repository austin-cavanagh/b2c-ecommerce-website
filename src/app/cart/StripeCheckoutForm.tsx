// STRIPE DOCS - CUSTOM PAYMENT FLOW

'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
  AddressElement,
} from '@stripe/react-stripe-js';
import {
  StripeAddressElement,
  StripePaymentElementOptions,
} from '@stripe/stripe-js';

export default function StripeCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<null | undefined | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      //   console.log(paymentIntent);

      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/cart',
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: {
      type: 'accordion',
      defaultCollapsed: true,
      radios: false,
      spacedAccordionItems: true,
    },
  };

  return (
    // <form id="payment-form" onSubmit={handleSubmit}>
    //   <PaymentElement id="payment-element" options={paymentElementOptions} />
    //   <button disabled={isLoading || !stripe || !elements} id="submit">
    //     <span id="button-text">
    //       {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
    //     </span>
    //   </button>

    //   {/* Show any error or success messages */}
    //   {message && <div id="payment-message">{message}</div>}
    // </form>
    <button
      disabled={isLoading || !stripe}
      onClick={handleCheckout}
      id="checkout-button"
      className={`w-full rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium font-semibold leading-4 text-white shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${isLoading || !stripe ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {/* <span id="button-text">
      {isLoading ? (
        <div className="spinner" id="spinner"></div>
      ) : (
        'Pay with Stripe'
      )}
    </span> */}
      Checkout with Stripe
    </button>
  );
}
