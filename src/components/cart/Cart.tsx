'use client';

import { useRef, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { ClockIcon } from '@heroicons/react/20/solid';
import RemoveFromCartButton from './RemoveFromCartButton';
import { CartItem, ImageUrl, Product } from '@prisma/client';
import { classNames } from '@/functions/classNames';
import { createCheckoutSession } from '@/actions/createCheckoutSession';
import Link from 'next/link';
import PayPal from '@/app/cart/PayPal';

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

export type ExtendedProduct = Product & {
  imageUrls: ImageUrl[];
};

export type ExtendedCartItem = CartItem & {
  product: ExtendedProduct;
};

export type CartProps = {
  cart: ExtendedCartItem[];
};

export default function Cart({ cart }: CartProps) {
  const [deliveryMethod, setDeliveryMethod] = useState(deliveryMethods[0]);

  const subtotal = cart.reduce((total: number, item) => {
    return total + item.price;
  }, 0);

  const handleStripeCheckout = async () => {
    const cartItemIds: CartItemIds[] = cart.map(item => {
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
                      <div className="flex-shrink-0">
                        <img
                          src={item.product.imageUrls[0].imageSrc}
                          alt={item.product.imageUrls[0].imageAlt}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-40 sm:w-40"
                        />
                      </div>
                    </Link>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <Link
                              href={`/products/${item.product.name}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.product.name}
                            </Link>
                            {/* <a
                              href={item.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.product.name}
                            </a> */}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.dimensions}
                          </p>
                          {/* <p className="mt-1 text-sm text-gray-500">
                            {item.size}
                          </p> */}
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

              <div className="mt-5">
                <button
                  onClick={handleStripeCheckout}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#635bff] text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  <div className="w-22">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // width="120"
                      // height="60"
                      fillRule="evenodd"
                      fill="white"
                      viewBox="0 0 120 60"
                    >
                      <path d="M101.547 30.94c0-5.885-2.85-10.53-8.3-10.53-5.47 0-8.782 4.644-8.782 10.483 0 6.92 3.908 10.414 9.517 10.414 2.736 0 4.805-.62 6.368-1.494v-4.598c-1.563.782-3.356 1.264-5.632 1.264-2.23 0-4.207-.782-4.46-3.494h11.24c0-.3.046-1.494.046-2.046zM90.2 28.757c0-2.598 1.586-3.678 3.035-3.678 1.402 0 2.897 1.08 2.897 3.678zm-14.597-8.345c-2.253 0-3.7 1.057-4.506 1.793l-.3-1.425H65.73v26.805l5.747-1.218.023-6.506c.828.598 2.046 1.448 4.07 1.448 4.115 0 7.862-3.3 7.862-10.598-.023-6.667-3.816-10.3-7.84-10.3zm-1.38 15.84c-1.356 0-2.16-.483-2.713-1.08l-.023-8.53c.598-.667 1.425-1.126 2.736-1.126 2.092 0 3.54 2.345 3.54 5.356 0 3.08-1.425 5.38-3.54 5.38zm-16.4-17.196l5.77-1.24V13.15l-5.77 1.218zm0 1.747h5.77v20.115h-5.77zm-6.185 1.7l-.368-1.7h-4.966V40.92h5.747V27.286c1.356-1.77 3.655-1.448 4.368-1.195v-5.287c-.736-.276-3.425-.782-4.782 1.7zm-11.494-6.7L34.535 17l-.023 18.414c0 3.402 2.552 5.908 5.954 5.908 1.885 0 3.264-.345 4.023-.76v-4.667c-.736.3-4.368 1.356-4.368-2.046V25.7h4.368v-4.897h-4.37zm-15.54 10.828c0-.897.736-1.24 1.954-1.24a12.85 12.85 0 0 1 5.7 1.47V21.47c-1.908-.76-3.793-1.057-5.7-1.057-4.667 0-7.77 2.437-7.77 6.506 0 6.345 8.736 5.333 8.736 8.07 0 1.057-.92 1.402-2.207 1.402-1.908 0-4.345-.782-6.276-1.84v5.47c2.138.92 4.3 1.3 6.276 1.3 4.782 0 8.07-2.368 8.07-6.483-.023-6.85-8.782-5.632-8.782-8.207z" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* <div className="mt-5">
                <button
                  // type="submit"
                  onClick={handleCheckout}
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Stripe
                </button>
              </div>

              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path d="M8.25 10.435l-2.165 0.46-0.010 7.12c0 1.315 0.99 2.165 2.305 2.165 0.73 0 1.265-0.135 1.56-0.295v-1.69c-0.285 0.115-1.685 0.525-1.685-0.785v-3.16h1.685v-1.89h-1.685zM12.705 13.015l-0.135-0.655h-1.92v7.66h2.215v-5.155c0.525-0.69 1.41-0.555 1.695-0.465v-2.040c-0.3-0.105-1.335-0.3-1.855 0.655zM17.32 9.4l-2.23 0.475v1.81l2.23-0.475zM2.245 14.615c0-0.345 0.29-0.48 0.755-0.485 0.675 0 1.535 0.205 2.21 0.57v-2.090c-0.735-0.29-1.47-0.405-2.205-0.405-1.8 0-3 0.94-3 2.51 0 2.46 3.375 2.060 3.375 3.12 0 0.41-0.355 0.545-0.85 0.545-0.735 0-1.685-0.305-2.43-0.71v2c0.825 0.355 1.66 0.505 2.425 0.505 1.845 0 3.115-0.79 3.115-2.39 0-2.645-3.395-2.17-3.395-3.17zM32 16.28c0-2.275-1.1-4.070-3.21-4.070s-3.395 1.795-3.395 4.055c0 2.675 1.515 3.91 3.675 3.91 1.060 0 1.855-0.24 2.46-0.575v-1.67c-0.605 0.305-1.3 0.49-2.18 0.49-0.865 0-1.625-0.305-1.725-1.345h4.345c0.010-0.115 0.030-0.58 0.030-0.795zM27.605 15.44c0-1 0.615-1.42 1.17-1.42 0.545 0 1.125 0.42 1.125 1.42zM21.96 12.21c-0.87 0-1.43 0.41-1.74 0.695l-0.115-0.55h-1.955v10.24l2.22-0.47 0.005-2.51c0.32 0.235 0.795 0.56 1.57 0.56 1.59 0 3.040-1.16 3.040-3.98 0.005-2.58-1.465-3.985-3.025-3.985zM21.43 18.335c-0.52 0-0.83-0.19-1.045-0.42l-0.015-3.3c0.23-0.255 0.55-0.44 1.060-0.44 0.81 0 1.37 0.91 1.37 2.070 0.005 1.195-0.545 2.090-1.37 2.090zM15.095 20.020h2.23v-7.66h-2.23z"></path>{' '}
                </g>
              </svg> */}

              <div className="mt-4">
                {/* <button
                  // type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  PayPal
                </button> */}

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
