// const products = [
//   {
//     id: 1,
//     name: 'Teacher Pencil Sign',
//     sortDescription: 'Short Description',
//     longDescription: 'Long Description',
//     imageUrl: [
//       'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/board-1-1.JPG',
//       'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
//       'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
//     ],
//     price: 100,
//     dimensions: '5x5',
//     category: 'Test',
//     craftingTime: 14,
//     custimizatoinOptions:
//       'Explanation of what can be changed and what should be specified in directions',
//   },
// ];

import { products, ProductType } from '@/data/products';
import Link from 'next/link';

export default function ProductsGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product: ProductType) => (
            <Link
              href={`/new-products/${product.name.toLocaleLowerCase()}`}
              className="text-base font-semibold leading-6 text-gray-900"
            >
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageUrl[0]}
                    alt={product.name}
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
                    ${(product.price / 100).toFixed(2)}
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
