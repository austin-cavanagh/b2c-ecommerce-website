import { createCheckoutSession } from '@/actions/createCheckoutSession';

export default function StripeCheckoutButton() {
  const handleCheckout = async () => {
    const delivery = false;
    const checkoutSessionUrl = await createCheckoutSession(delivery);
    console.log('checkoutSessionUrl', checkoutSessionUrl);
  };

  return (
    <button
      //   disabled={isLoading || !stripe}
      onClick={handleCheckout}
      id="checkout-button"
      className={`w-full rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium font-semibold leading-4 text-white shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 `}
    >
      Checkout with Stripe
    </button>
  );
}
