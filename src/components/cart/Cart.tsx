'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CartItem, ImageUrl, Product } from '@prisma/client';
import { classNames } from '@/functions/classNames';
import CheckoutButtons from './CheckoutButtons';
import OrderSummary from './OrderSummary';

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

export default function Cart({ cart }: CartProps) {
  const [deliveryMethod, setDeliveryMethod] = useState(deliveryMethods[0]);

  return (
    <div className="w-full">
      <h2 className="mx-auto mb-5 text-center text-5xl font-semibold text-gray-900">
        Cart
      </h2>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <div className="lg:grid lg:grid-cols-5 lg:gap-x-12 xl:gap-x-16">
          {/* Order summary */}
          <OrderSummary cart={cart} />

          {/* Right Side */}
          <div className="lg:col-span-2">
            {/* Delivery Mehtod */}
            <div className="">
              <RadioGroup value={deliveryMethod} onChange={setDeliveryMethod}>
                <div className="mt-5 space-y-4">
                  {deliveryMethods.map(method => (
                    <RadioGroup.Option
                      key={method.id}
                      value={method}
                      className={({ active }) =>
                        classNames(
                          active
                            ? 'border-primary ring-2 ring-primary'
                            : 'border-gray-300',
                          'relative block cursor-pointer rounded-[30px] border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
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
                              checked ? 'border-primary' : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-3xl',
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

            {/* Checkout Section */}
            <CheckoutButtons cart={cart} deliveryMethod={deliveryMethod} />
          </div>
        </div>
      </div>
    </div>
  );
}
