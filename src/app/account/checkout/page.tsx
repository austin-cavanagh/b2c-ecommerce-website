'use client';

import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from '../../../components/StripeCheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('stripe public key');

export default function Checkout() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-6 sm:p-6">
      <Elements stripe={stripePromise}>
        <StripeCheckoutForm />
      </Elements>
    </main>
  );
}
