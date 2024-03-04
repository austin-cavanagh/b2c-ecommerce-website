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

const product: ProductType = {
  id: 1,
  name: 'Teacher Pencil Sign',
  shortDescription: 'Short Description how long is',
  longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
  category: 'Test',
  craftingTime: 14,
  customizationOptions:
    'Explanation of what can be changed and what should be specified in directions',
  prices: [
    {
      id: 1,
      productId: 1,
      dimension: '12x12',
      price: 1000,
    },
    {
      id: 2,
      productId: 2,
      dimension: '15x15',
      price: 2000,
    },
    {
      id: 3,
      productId: 3,
      dimension: '20x20',
      price: 3000,
    },
  ],
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Shipping',
      items: ['Shipping is free for orders above $50'],
    },
  ],
  imageUrls: [
    {
      image:
        'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
      alt: 'Description',
    },
    {
      image:
        'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
      alt: 'Description',
    },
    {
      image:
        'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
      alt: 'Description',
    },
    {
      image:
        'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
      alt: 'Description',
    },
  ],
};

import { products, ProductType } from '@/data/products';
import Link from 'next/link';

export default function ProductsGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
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
                    src={product.imageUrls[0].image}
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
