import { useEffect, useState } from 'react';
import { Disclosure, RadioGroup, Tab } from '@headlessui/react';
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Product } from '@prisma/client';

export default function AddToCartForm({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.prices[0]);

  return (
    <form className="mt-6">
      {/* Size Picker */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-900">Dimensions</h2>
          {/* <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              See sizing chart
            </a> */}
        </div>

        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-2"
        >
          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {product.prices.map((size, index) => (
              <RadioGroup.Option
                // key={size.name}
                key={index}
                value={size}
                className={({ active, checked }) =>
                  classNames(
                    'cursor-pointer focus:outline-none',
                    active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                    checked
                      ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                    'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium sm:flex-1',
                  )
                }
              >
                <RadioGroup.Label as="span">{size.dimension}</RadioGroup.Label>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Color Picker */}
      {/* <div>
          <h3 className="text-sm text-gray-600">Color</h3>

          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-2"
          >
            <RadioGroup.Label className="sr-only">
              Choose a color
            </RadioGroup.Label>
            <span className="flex items-center space-x-3">
              {product.colors.map(color => (
                <RadioGroup.Option
                  key={color.name}
                  value={color}
                  className={({ active, checked }) =>
                    classNames(
                      color.selectedColor,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                    )
                  }
                >
                  <RadioGroup.Label as="span" className="sr-only">
                    {color.name}
                  </RadioGroup.Label>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.bgColor,
                      'h-8 w-8 rounded-full border border-black border-opacity-10',
                    )}
                  />
                </RadioGroup.Option>
              ))}
            </span>
          </RadioGroup>
        </div> */}

      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to cart
        </button>

        {/* <button
            type="button"
            className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <HeartIcon
              className="h-6 w-6 flex-shrink-0"
              aria-hidden="true"
            />
            <span className="sr-only">Add to favorites</span>
          </button> */}
      </div>
    </form>
  );
}
