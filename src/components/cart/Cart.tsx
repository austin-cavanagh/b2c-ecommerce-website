'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ClockIcon, XMarkIcon } from '@heroicons/react/20/solid';
import RemoveFromCartButton from './RemoveFromCartButton';
import { CartItem } from '@prisma/client';
import { classNames } from '@/functions/classNames';
import { createCheckoutSession } from '@/actions/createCheckoutSession';

const deliveryMethods = [
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

type CartProps = {
  cartItems: CartItem[];
};

export type CartItemIds = {
  productId: number;
  stripePriceId: string;
};

export default function Cart({ cartItems }: CartProps) {
  const [deliveryMethod, setDeliveryMehtod] = useState(deliveryMethods[0]);

  const subtotal = cartItems.reduce((total: number, item) => {
    return total + item.price;
  }, 0);

  console.log(cartItems);

  const handleCheckout = async () => {
    const cartItemIds: CartItemIds[] = cartItems.map(item => {
      return {
        productId: item.productId,
        stripePriceId: item.stripePriceId,
      };
    });

    const checkoutSessionUrl = await createCheckoutSession(
      deliveryMethod.title,
      cartItemIds,
    );
    console.log('checkoutSessionUrl', checkoutSessionUrl);
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form className="lg:grid lg:grid-cols-5 lg:gap-x-12 xl:gap-x-16">
          {/* Order summary */}
          <div className="mt-10 lg:col-span-3 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-5 rounded-lg border border-gray-200 bg-white shadow-sm">
              {/* Cart Items */}
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="flex px-4 py-6 sm:px-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.product.imageUrls[0].imageSrc}
                        alt={item.product.imageUrls[0].imageAlt}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-40 sm:w-40"
                      />
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a
                              href={item.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.product.name}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.dimensions}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.size}
                          </p>
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
              <RadioGroup value={deliveryMethod} onChange={setDeliveryMehtod}>
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

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Stripe
                </button>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  PayPal
                </button>
              </div>
            </div>
          </div>
        </form>

        <button
          onClick={handleCheckout}
          id="checkout-button"
          className={`w-full rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium font-semibold leading-4 text-white shadow-sm hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 `}
        >
          Checkout with Stripe
        </button>
      </div>
    </div>
  );
}
