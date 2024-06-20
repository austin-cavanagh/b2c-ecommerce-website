'use client';

import { getPageItems } from '@/actions/getPageItems';
import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export type ProductType = {
  id: string;
  name: string;
  shortDescription: string;
  prices: Array<{ price: number }>;
  imageUrls: Array<{ src: string; alt: string }>;
};

export default function ProductsGrid() {
  const itemsPerPage = 39;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    async function getProductsData() {
      handleLoadItems(pageNumber);
    }
    getProductsData();
  }, [pageNumber]);

  // Function to get products
  const handleLoadItems = async (newPageNumber: number) => {
    const data = await getPageItems(newPageNumber, itemsPerPage);
    const newProducts = data.data.map(product => ({
      ...product,
      id: String(product.id),
    }));

    console.log('NEW_PRODUCTS:', newProducts);

    setProducts(products => {
      return [...products, ...newProducts];
    });
    setPageNumber(newPageNumber);
  };

  // Render a fragment prior to the products loading in
  if (!products.length) {
    return <></>;
  }

  return (
    <div className="w-full">
      <div className="mb-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index} // This ensures that index is 0, 1, or 2 in each row of 3 columns
          />
        ))}
      </div>
    </div>
  );
}
