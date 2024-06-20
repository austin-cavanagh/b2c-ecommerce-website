import Image from 'next/image';
import { RadioGroup, Tab } from '@headlessui/react';
import { ExtendedProduct } from '@/actions/getProduct';
import { classNames } from '@/functions/classNames';

type ProductImagesProps = {
  product: ExtendedProduct;
};

export default function ProductImages({ product }: ProductImagesProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-5 gap-6">
          {product.imageUrls.map((image, index) => (
            <Tab
              key={index}
              className="aspect-h-1 aspect-w-1 relative flex cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.alt}</span>
                  <span
                    className={classNames(
                      'absolute inset-0 overflow-hidden rounded-2xl shadow-xl',
                      selected ? 'bg-black bg-opacity-50' : '',
                    )}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </span>
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
              className="rounded-[50px] shadow-xl"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
