import ProductsOverview from '@/components/products/ProductsOverview';

export default async function Products() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-start p-8">
      <ProductsOverview />
    </main>
  );
}
