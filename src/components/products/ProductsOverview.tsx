'use client';

import { Fragment, useState } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { classNames } from '@/functions/classNames';
import ProductsGrid from '@/components/products/ProductsGrid';
import Pagination from './Pagination';
import Filters from './Filters';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

export default function ProductsOverview() {
  return (
    <div className="">
      <div>
        <main>
          {/* Heading */}
          <div className="py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Crafts
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
              Thoughtfully designed objects for the workspace, home, and travel.
            </p>
          </div>

          {/* Filters */}
          <Filters />

          {/* Products Grid */}
          <ProductsGrid />

          {/* Pagination */}
          {/* <Pagination /> */}
        </main>
      </div>
    </div>
  );
}
