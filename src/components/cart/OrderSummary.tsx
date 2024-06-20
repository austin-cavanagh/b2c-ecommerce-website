import Image from 'next/image';
import Link from 'next/link';
import { ItemDetailsDropdown } from './ItemDetailsDropdown';
import RemoveFromCartButton from './RemoveFromCartButton';
import { ClockIcon } from '@heroicons/react/20/solid';
import { ExtendedCartItem } from './Cart';

type OrderSummaryProps = {
  cart: ExtendedCartItem[];
};

export default function OrderSummary({ cart }: OrderSummaryProps) {
  const subtotal = cart.reduce((total: number, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="mt-10 lg:col-span-3 lg:mt-0">
      <div className="mt-5 rounded-[40px] border border-gray-200 bg-white shadow-sm">
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
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-[40px] sm:h-40 sm:w-40">
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
        </dl>
      </div>
    </div>
  );
}
