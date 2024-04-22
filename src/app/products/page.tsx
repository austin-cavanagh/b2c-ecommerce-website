import ProductsOverview from '@/components/products/ProductsOverview';
import ProductsGrid from './ProductsGrid';

export default async function Products() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      {/* <ProductsGrid /> */}

      <ProductsOverview />
    </main>
  );
}
