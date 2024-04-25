'use client';

import { getPageItems } from '@/actions/getPageItems';
import { getProductsAction } from '@/actions/getProductsAction';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ProductType = {
  id: string;
  name: string;
  shortDescription: string;
  prices: Array<{ price: number }>;
  imageUrls: Array<{ imageSrc: string; imageAlt: string }>;
};

export default function ProductsGrid() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getProductsData() {
      const productsData = await getProductsAction();

      // (page, limit)
      const pageItems = await getPageItems(4, 12);
      console.log('PAGE_ITEMS:', pageItems);

      setProducts(productsData);
    }

    getProductsData(); // Correctly call the async function inside useEffect
  }, []);

  if (!products.length) {
    return <div>Loading...</div>; // Added loading state for better UX
  }

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <Link
              href={`/products/${product.name.toLocaleLowerCase()}`}
              className="text-base font-semibold leading-6 text-gray-900"
              key={product.id}
            >
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageUrls[0].imageSrc}
                    alt={product.imageUrls[0].imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                      {/* </a> */}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.shortDescription}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.prices[0].price / 100}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
