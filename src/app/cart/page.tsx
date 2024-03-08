import CartOverview from '@/components/cart/CartOverview';
import CartPage from '@/components/cart/CartPage';
import DeliveryMethods from '@/components/cart/DeliveryMethods';
import Example from '@/components/cart/DeliveryMethods';
import ShippingInformation from '@/components/cart/ShippingInformation';

export default async function CartRoute() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      {/* <CartOverview /> */}
      {/* <CartPage /> */}
      {/* <DeliveryOptions /> */}
      <ShippingInformation />
    </main>
  );
}
