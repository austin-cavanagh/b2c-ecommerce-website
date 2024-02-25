// import { stripeAction } from '@/actions/stripeAction';
import PayPalCheckout from './PayPalProvider';

export default async function PayPal() {
  //   const clientSecret = (await stripeAction()) as string;

  return (
    <main className="flex w-full flex-1 items-center justify-center px-6 py-6 sm:p-6">
      <PayPalCheckout />
    </main>
  );
}
