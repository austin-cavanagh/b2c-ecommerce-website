import stripeAction from '@/actions/stripeAction';
import CheckoutForm from './CheckoutForm';

export default async function VerificationTokenExpired() {
  const clientSecret = await stripeAction();

  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-6 sm:p-6">
      <CheckoutForm clientSecret={clientSecret} />
    </main>
  );
}
