'use client';

import { getPageItems } from '@/actions/getPageItems';
import { getProductsAction } from '@/actions/getProductsAction';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ParallaxScrollGrid } from './ParallaxScrollGrid';
import { ProductCard } from './ProductCard';

export type ProductType = {
  id: string;
  name: string;
  shortDescription: string;
  prices: Array<{ price: number }>;
  imageUrls: Array<{ src: string; alt: string }>;
};

export default function ProductsGrid() {
  const itemsPerPage = 33;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [totalProducts, setTotalProducts] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function getProductsData() {
      // updatePage(pageNumber);
      handleLoadItems(pageNumber);
    }

    getProductsData();
  }, []);

  const handleLoadItems = async (newPageNumber: number) => {
    const data = await getPageItems(newPageNumber, itemsPerPage);
    const newProducts = data.data;

    setProducts(products => {
      return [...products, ...newProducts];
    });
    setPageNumber(newPageNumber);
    setTotalProducts(data.totalProducts);
  };

  if (!products.length) {
    return <div>Loading...</div>;
  }

  const images = products.map(product => {
    return product.imageUrls[0];
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <Link
            href={`/products/${product.name.toLocaleLowerCase()}`}
            className="text-base font-semibold leading-6 text-gray-900"
            key={product.id}
          >
            <div
              key={product.id}
              className="group relative transform overflow-hidden rounded-lg shadow-xl transition duration-500 ease-in-out hover:scale-105"
            >
              <div className="aspect-h-1 aspect-w-1 w-full bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageUrls[0].src}
                  alt={product.imageUrls[0].alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                <div className="p-6 text-center">
                  <p className="text-xl font-bold text-white">{product.name}</p>
                  <p className="mt-4 text-xl font-bold text-white">
                    ${product.prices[0].price / 100}
                  </p>
                </div>
              </div>

              {/* <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.shortDescription}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.prices[0].price / 100}
                  </p>
                </div> */}
            </div>
          </Link>
        ))}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* <ParallaxScrollGrid images={images} /> */}

      {/* Load Products Button */}
      {/* <button onClick={() => handleLoadItems(pageNumber + 1)}>Load more</button> */}
    </div>
  );
}
