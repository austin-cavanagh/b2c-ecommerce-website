'use server';

import ProductsGrid from '@/components/products/ProductsGrid';

export default async function ProductsOverview() {
  return (
    <div className="mx-auto w-full max-w-5xl ">
      {/* Heading */}
      <div className="pb-14 text-center">
        <h1 className="text-4xl text-5xl font-semibold tracking-tight text-gray-900">
          Products
        </h1>
      </div>

      {/* Products Grid */}
      <ProductsGrid />
    </div>
  );
}
