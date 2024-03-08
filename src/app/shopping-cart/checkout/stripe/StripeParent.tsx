'use server';
import 'server-only';

import StripeBtns from '@/components/payments/stripe/StripeBtns';
import { createPaymentIntent } from './stripeActions';

export default async function StripeParent() {
  const items = [{ id: 'xl-tshirt', amount: 1000 }];

  const paymentIntent = await createPaymentIntent(items);
  const client_secret = paymentIntent.client_secret;

  // console.log(client_secret);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <StripeBtns clientSecret={client_secret} />
    </main>
  );
}
