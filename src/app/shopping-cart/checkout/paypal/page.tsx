import PayPalBtns from '@/components/PayPalBtns';
import PayPalCheckout from '@/components/payments/paypal/PayPalCheckout';

export default function PayPal() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <PayPalBtns />
    </main>
  );
}
