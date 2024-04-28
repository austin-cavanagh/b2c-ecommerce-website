'use client';

import { useRef, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
} from '@heroicons/react/20/solid';
import RemoveFromCartButton from './RemoveFromCartButton';
import { CartItem, ImageUrl, Product } from '@prisma/client';
import { classNames } from '@/functions/classNames';
import Link from 'next/link';
import PayPal from '@/components/cart/PayPal';
import StripeButton from './StripeButton';
import { ItemDetailsDropdown } from './ItemDetailsDropdown';
import Image from 'next/image';

export type DeliveryMethod = {
  id: number;
  title: string;
  description: string;
};

const deliveryMethods: DeliveryMethod[] = [
  {
    id: 1,
    title: 'Pickup',
    description:
      'Pickup in Eastvale CA when your product is ready. Address will be sent after your purchase.',
  },
  {
    id: 2,
    title: 'Delivery',
    description:
      'Free shipping for orders above $50. Shipping prices will vary based on product size.',
  },
];

export type CartItemIds = {
  productId: number;
  stripePriceId: string;
};

export type Customization = {
  label: string;
  value: string;
};

export type ExtendedProduct = Product & {
  imageUrls: ImageUrl[];
};

export type ExtendedCartItem = CartItem & {
  product: ExtendedProduct;
  customizations: Customization[]; // Ensure this is always an array
};

export type CartProps = {
  cart: ExtendedCartItem[];
};

export type VisibleCustomizations = {
  [key: number]: boolean;
};

export default function Cart({ cart }: CartProps) {
  const [deliveryMethod, setDeliveryMethod] = useState(deliveryMethods[0]);

  const subtotal = cart.reduce((total: number, item) => {
    return total + item.price;
  }, 0);

  const [visibleCustomizations, setVisibleCustomizations] =
    useState<VisibleCustomizations>({});

  const toggleCustomizations = (itemId: number) => {
    setVisibleCustomizations(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        {/* <form className="lg:grid lg:grid-cols-5 lg:gap-x-12 xl:gap-x-16"> */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-12 xl:gap-x-16">
          {/* Order summary */}
          <div className="mt-10 lg:col-span-3 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-5 rounded-lg border border-gray-200 bg-white shadow-sm">
              {/* Cart Items */}
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {cart.map(item => (
                  <li key={item.id} className="flex px-4 py-6 sm:px-6">
                    {/* Image */}

                    <Link
                      href={`/products/${item.product.name}`}
                      className="font-medium text-gray-700 hover:text-gray-800"
                    >
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md sm:h-40 sm:w-40">
                        <Image
                          src={item.product.imageUrls[0].src}
                          alt={item.product.imageUrls[0].alt}
                          className="object-cover object-center"
                          fill
                        />
                      </div>
                    </Link>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          {/* Item Name */}
                          <h4 className="text-sm">
                            <Link
                              href={`/products/${item.product.name}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.product.name}
                            </Link>
                          </h4>

                          {/* Item Details Dropdown */}
                          <ItemDetailsDropdown
                            itemId={item.id}
                            customizations={item.customizations}
                            dimensions={item.dimensions}
                          />
                        </div>

                        {/* Price */}
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ${(item.price / 100).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        {/* Crafting Time */}
                        <p className="flex items-center space-x-2 text-sm text-gray-700">
                          <ClockIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            aria-hidden="true"
                          />
                          <span>{`10 days`}</span>
                        </p>

                        {/* Remove Item Button */}
                        <RemoveFromCartButton itemId={item.id} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="space-y-2 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium">Subtotal</dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${(subtotal / 100).toFixed(2)}
                  </dd>
                </div>
                {/* <p className="text-gray-500">
                  Taxes and shipping will be calculated at checkout
                </p> */}
              </dl>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2">
            {/* Delivery Mehtod */}
            <div className="">
              <RadioGroup value={deliveryMethod} onChange={setDeliveryMethod}>
                <RadioGroup.Label className="text-lg font-medium text-gray-900">
                  Delivery method
                </RadioGroup.Label>
                <div className="mt-5 space-y-4">
                  {deliveryMethods.map(method => (
                    <RadioGroup.Option
                      key={method.id}
                      value={method}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'border-indigo-600 ring-2 ring-indigo-600'
                            : 'border-gray-300',
                          'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <span className="flex items-center">
                            <span className="flex flex-col text-sm">
                              <RadioGroup.Label
                                as="span"
                                className="mb-1 font-medium text-gray-900"
                              >
                                {method.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="text-gray-500"
                              >
                                <span className="block sm:inline">
                                  {method.description}
                                </span>
                              </RadioGroup.Description>
                            </span>
                          </span>
                          <span
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-indigo-600'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg',
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Payment</h2>

              {/* Gray Line To Seperate Checkout */}
              {/* <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-sm text-gray-500">
                    Checkout with
                  </span>
                </div>
              </div> */}

              <StripeButton cart={cart} deliveryMethod={deliveryMethod} />

              <div className="mt-4">
                <PayPal cart={cart} deliveryMethod={deliveryMethod.title} />
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
