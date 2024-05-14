'use client';

import { useState } from 'react';
import { RadioGroup, Tab } from '@headlessui/react';

import addToCart from '@/actions/prisma/addToCart';
import { ExtendedProduct } from '@/actions/getProduct';
import { classNames } from '@/functions/classNames';
import Image from 'next/image';

export default function ProductOverview({
  product,
}: {
  product: ExtendedProduct;
}) {
  const [selectedSize, setSelectedSize] = useState(product.prices[0]);

  return (
    <div className="">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.imageUrls.map((image, index) => (
                  <Tab
                    key={index}
                    className="aspect-h-1 aspect-w-1 relative flex cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.alt}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-3xl">
                          <Image src={image.src} alt="" fill />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-primary' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-offset-2',
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.imageUrls.map((image, index) => (
                <Tab.Panel key={index}>
                  <Image
                    src={image.src}
                    alt={image.src}
                    fill
                    className="rounded-3xl"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${selectedSize.price / 100}
              </p>
            </div>

            {/* Product Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="space-y-6 text-base text-gray-700">
                {product.longDescription}
              </p>
            </div>

            <form className="mt-6" action={addToCart}>
              {/* Size Picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                </div>

                <RadioGroup
                  name="size"
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {product.prices.map((size, index) => (
                      <RadioGroup.Option
                        key={index}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            'cursor-pointer focus:outline-none',
                            active ? 'ring-2 ring-primary ring-offset-2' : '',
                            checked
                              ? 'border-transparent bg-primary text-white hover:brightness-90'
                              : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                            'flex items-center justify-center rounded-full border px-3 py-3 text-sm font-medium sm:flex-1',
                          )
                        }
                      >
                        <RadioGroup.Label as="span">
                          {size.dimension}
                        </RadioGroup.Label>
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Customizations */}
              <div className="mt-6 flex flex-col space-y-4">
                {/* Text Input */}
                {product.customizationOptions &&
                  product.customizationOptions.map((option, index) => {
                    return (
                      <div key={index}>
                        <label
                          htmlFor={option.label}
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          {option.label}
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name={option.label}
                            id={option.label}
                            className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                            placeholder={option.description}
                            aria-describedby={`${option.label}-description`}
                          />
                        </div>
                        <p
                          className="mt-2 text-sm text-gray-500"
                          id="email-description"
                        >
                          {option.description}
                        </p>
                      </div>
                    );
                  })}
              </div>

              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
