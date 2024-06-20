import { DeliveryMethod, ExtendedCartItem } from './Cart';
import PayPal from './PayPal';
import StripeButton from './StripeButton';

type CheckoutButtonsProps = {
  cart: ExtendedCartItem[];
  deliveryMethod: DeliveryMethod;
};

export default function CheckoutButtons({
  cart,
  deliveryMethod,
}: CheckoutButtonsProps) {
  return (
    <div className="mt-0 pt-8">
      {/* Gray Line To Seperate Checkout */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#f9f8fb] px-2 text-sm text-gray-900">
            Checkout with
          </span>
        </div>
      </div>

      <StripeButton cart={cart} deliveryMethod={deliveryMethod} />

      <div className="mt-4">
        <PayPal cart={cart} deliveryMethod={deliveryMethod.title} />
      </div>
    </div>
  );
}
