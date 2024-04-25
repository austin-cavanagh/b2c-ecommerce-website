'use server';
import 'server-only';

import {
  ArrowRightCircleIcon,
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/20/solid';
import { getOrders } from '@/actions/getOrders';
import Link from 'next/link';
import MobilePopupMenu from '@/components/orders/MobilePopupMenu';
import {
  Customization,
  ItemDetailsDropdown,
} from '@/components/cart/ItemDetailsDropdown';

export default async function OrdersRoute() {
  const orders = await getOrders();

  console.log('ORDERS', orders[0].orderItems[0]);

  return (
    <div className="">
      <div className="py-16 sm:py-24">
        {/* Header */}
        {/* <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover
              similar products.
            </p>
          </div>
        </div> */}

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {orders.map(order => (
                <div
                  key={order.id}
                  className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                >
                  <h3 className="sr-only">
                    Order placed on{' '}
                    <time dateTime={new Date(order.createdAt).toISOString()}>
                      {new Date(order.createdAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </h3>

                  <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                    <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Order number
                        </dt>
                        <dd className="mt-1 text-gray-500">{order.orderId}</dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">
                          Date placed
                        </dt>
                        <dd className="mt-1 text-gray-500">
                          <time
                            dateTime={new Date(order.createdAt).toISOString()}
                          >
                            {new Date(order.createdAt).toLocaleDateString(
                              undefined,
                              {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              },
                            )}
                          </time>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">
                          Total amount
                        </dt>
                        <dd className="mt-1 font-medium text-gray-900">
                          ${(order.totalCost / 100).toFixed(2)}
                        </dd>
                      </div>
                    </dl>

                    {/* Mobile Popup Menu */}
                    <MobilePopupMenu orderNumber={order.orderId} />

                    {/* View Order & View Invoice Buttons */}
                    {/* <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <a
                        href={order.href}
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span>View Order</span>
                        <span className="sr-only">{order.number}</span>
                      </a>

                      <a
                        href={order.invoiceHref}
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span>View Invoice</span>
                        <span className="sr-only">
                          for order {order.number}
                        </span>
                      </a>
                    </div> */}
                  </div>

                  {/* Products List */}
                  <h4 className="sr-only">Items</h4>
                  <ul role="list" className="divide-y divide-gray-200">
                    {order.orderItems.map(item => (
                      <li key={item.id} className="p-4 sm:p-6">
                        <div className="flex items-center sm:items-start">
                          <Link
                            href={`/products/${item.name.toLocaleLowerCase()}`}
                            className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40"
                          >
                            <img
                              src={item.product.imageUrls[0].imageSrc}
                              alt={item.product.imageUrls[0].imageAlt}
                              className="h-full w-full object-cover object-center"
                            />
                          </Link>

                          <div className="ml-6 flex-1 text-sm">
                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                              {/* Item Name */}
                              <Link
                                href={`/products/${item.name.toLocaleLowerCase()}`}
                              >
                                <h5>{item.name}</h5>
                              </Link>
                              {/* Item Price */}
                              <p className="mt-2 sm:mt-0">
                                {' '}
                                ${(item.price / 100).toFixed(2)}
                              </p>
                            </div>

                            {/* Item Description */}
                            <p className="hidden text-gray-500 sm:mt-2 sm:block">
                              This is a placeholder because I have not decided
                              if I want the desctiption
                            </p>

                            {/* Item Details Dropdown */}
                            <ItemDetailsDropdown
                              itemId={item.id}
                              customizations={
                                item.customizations as Customization[]
                              }
                              dimensions={'10x10x10'}
                            />
                          </div>
                        </div>

                        <div className="mt-6 sm:flex sm:justify-between">
                          <div className="flex items-center">
                            {order.deliveredAt ? (
                              <>
                                {/* Delivered Icon */}
                                <CheckCircleIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                                <p className="ml-2 text-sm font-medium text-gray-500">
                                  Delivered on{' '}
                                  <time
                                    dateTime={new Date(
                                      order.deliveredAt,
                                    ).toISOString()}
                                  >
                                    {new Date(
                                      order.deliveredAt,
                                    ).toLocaleDateString(undefined, {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                    })}
                                  </time>
                                </p>
                              </>
                            ) : order.shippedAt ? (
                              <>
                                {/* Shipping Icon */}
                                <ArrowRightCircleIcon
                                  className="h-5 w-5 text-yellow-400"
                                  aria-hidden="true"
                                />
                                <p className="ml-2 text-sm font-medium text-gray-500">
                                  Shipped on{' '}
                                  <time
                                    dateTime={new Date(
                                      order.shippedAt,
                                    ).toISOString()}
                                  >
                                    {new Date(
                                      order.shippedAt,
                                    ).toLocaleDateString(undefined, {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                    })}
                                  </time>
                                </p>
                              </>
                            ) : (
                              <>
                                {/* Crafting Icon */}
                                <EllipsisHorizontalCircleIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                                <p className="ml-2 text-sm font-medium text-gray-500">
                                  Crafting started on{' '}
                                  <time
                                    dateTime={
                                      order.craftingStarted
                                        ? new Date(
                                            order.craftingStarted,
                                          ).toISOString()
                                        : ''
                                    }
                                  >
                                    {order.craftingStarted
                                      ? new Date(
                                          order.craftingStarted,
                                        ).toLocaleDateString(undefined, {
                                          year: 'numeric',
                                          month: 'long',
                                          day: 'numeric',
                                        })
                                      : 'N/A'}
                                  </time>
                                </p>
                              </>
                            )}
                          </div>

                          <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                            {/* View Product Button */}
                            <div className="flex flex-1 justify-center">
                              <Link
                                href={`/products/${item.name.toLocaleLowerCase()}`}
                                className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                              >
                                View Product
                              </Link>
                            </div>
                            {/* Buy Again Button */}
                            {/* <div className="flex flex-1 justify-center pl-4">
                              <a
                                href="#"
                                className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                              >
                                Buy again
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
