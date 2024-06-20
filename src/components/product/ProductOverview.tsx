'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import addToCart from '@/actions/prisma/addToCart';
import { ExtendedProduct } from '@/actions/product/getProduct';
import { classNames } from '@/functions/classNames';
import CustomizationsSection from './CustomizationsSection';
import ProductImages from './ProductImages';
import ProductDescription from './ProductDescription';

type ProductOverviewProps = {
  product: ExtendedProduct;
};

export default function ProductOverview({ product }: ProductOverviewProps) {
  const [selectedSize, setSelectedSize] = useState(product.prices[0]);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
        {/* Image gallery */}
        <ProductImages product={product} />

        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          {/* Product Description */}
          <ProductDescription
            product={product}
            price={`${selectedSize.price / 100}`}
          />

          <form className="mt-5" action={addToCart}>
            {/* Size Picker */}
            <div className="">
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
            <CustomizationsSection product={product} />

            {/* Button to Cart Button */}
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
  );
}
