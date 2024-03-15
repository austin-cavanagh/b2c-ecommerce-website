// STRIPE DOCS - CUSTOM PAYMENT FLOW

'use client';

// 'use server';
// import 'server-only';

import { useEffect, useState } from 'react';
import {
  Appearance,
  StripeElementsOptions,
  loadStripe,
} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import StripeCheckoutForm from './StripeCheckoutForm';
import { createPaymentIntent } from '../../actions/createPaymentIntent';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const STRIPE_PUBLISHABLE_KEY =
  'pk_test_51MioEJJwHQ2aHYX9tfpoaYateQJJvYO759Of81HSSC8PJ5qIX84j8CZs40kxHoCbUK1l0xJaRcm7C8K7JAfkj3Kh00VJPhOsA9';
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export type itemType = { id: string; amount: number };

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    async function getClientSecret() {
      const items: itemType[] = [{ id: 'xl-tshirt', amount: 1000 }];
      const clientSecret = await createPaymentIntent(items);
      if (typeof clientSecret !== 'string') return;
      setClientSecret(clientSecret);
    }

    getClientSecret();
  }, []);

  const appearance: Appearance = {
    theme: 'stripe',
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  // Elements is creating a context around the stripe checkout so child components have access to the data
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
}
