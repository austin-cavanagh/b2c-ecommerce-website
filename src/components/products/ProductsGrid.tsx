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
  const itemsPerPage = 12;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [totalProducts, setTotalProducts] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function getProductsData() {
      updatePage(pageNumber);
    }

    getProductsData();
  }, []);

  // PAGINATION
  // PAGINATION
  // PAGINATION

  const updatePage = async (newPageNumber: number) => {
    const data = await getPageItems(newPageNumber, itemsPerPage);
    setPageNumber(data.pageNumber);
    setTotalPages(data.totalPages);
    setTotalProducts(data.totalProducts);
    setProducts(data.data);
  };

  const handlePreviousPage = async () => {
    updatePage(pageNumber - 1);
  };

  const handleNextPage = async () => {
    updatePage(pageNumber + 1);
  };

  if (!products.length) {
    return <div>Loading...</div>;
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

      <nav
        className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing{' '}
            <span className="font-medium">
              {(pageNumber - 1) * itemsPerPage + 1}
            </span>{' '}
            to{' '}
            <span className="font-medium">
              {Math.min(pageNumber * itemsPerPage, totalProducts || 0)}
            </span>{' '}
            of <span className="font-medium">{totalProducts}</span> results
          </p>
        </div>

        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            onClick={handlePreviousPage}
            disabled={pageNumber === 1}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={pageNumber === totalPages}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
}
