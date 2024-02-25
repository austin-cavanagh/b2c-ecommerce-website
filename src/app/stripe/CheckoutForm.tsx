'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51MioEJJwHQ2aHYX9tfpoaYateQJJvYO759Of81HSSC8PJ5qIX84j8CZs40kxHoCbUK1l0xJaRcm7C8K7JAfkj3Kh00VJPhOsA9',
);

export default function CheckoutForm({
  clientSecret,
}: {
  clientSecret: string;
}) {
  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  );
}
