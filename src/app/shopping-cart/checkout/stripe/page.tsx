import StripeBtns from '@/components/payments/stripe/StripeBtns';

export default function Stripe() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <StripeBtns />
    </main>
  );
}
