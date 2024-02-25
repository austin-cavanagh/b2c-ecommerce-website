import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from '../../../components/payments/stripe/StripeCheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from '@/components/payments/stripe/Stripe';

export default function Checkout() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-6 sm:p-6">
      <Stripe />
    </main>
  );
}
