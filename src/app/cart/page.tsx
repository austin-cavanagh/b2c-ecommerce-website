import CartOverview from '@/components/cart/CartOverview';
import CartPage from '@/components/cart/CartPage';
import DeliveryOptions from '@/components/cart/DeliveryOptions';
import Example from '@/components/cart/DeliveryOptions2';

export default async function CartRoute() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      {/* <CartOverview /> */}
      {/* <CartPage /> */}
      {/* <DeliveryOptions /> */}
      <Example />
    </main>
  );
}
