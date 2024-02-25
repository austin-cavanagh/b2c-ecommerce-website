import { stripeAction } from '@/actions/stripeAction';
import PayPalCheckoutForm from './checkout/page';

export default async function Stripe() {
  const clientSecret = (await stripeAction()) as string;

  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-6 sm:p-6">
      <PayPalCheckoutForm />
    </main>
  );
}
