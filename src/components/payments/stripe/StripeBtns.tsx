'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useEffect, useState } from 'react';
import CheckoutForm from '@/app/shopping-cart/checkout/stripe/CheckoutForm';
import { createPaymentIntent } from '@/app/shopping-cart/checkout/stripe/stripeActions';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51MioEJJwHQ2aHYX9tfpoaYateQJJvYO759Of81HSSC8PJ5qIX84j8CZs40kxHoCbUK1l0xJaRcm7C8K7JAfkj3Kh00VJPhOsA9';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export default function StripeBtns({
  clientSecret,
  deliveryMethod,
}: {
  clientSecret: string;
  deliveryMethod: string;
}) {
  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App w-full">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            clientSecret={clientSecret}
            deliveryMethod={deliveryMethod}
          />
        </Elements>
      )}
    </div>
  );
}
