import CartOverview from '@/components/cart/CartOverview';

export default async function CartRoute() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <CartOverview />
    </main>
  );
}
