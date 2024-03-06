import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/prisma/prisma';
import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid';
import { getServerSession } from 'next-auth';

const cartItems = {
  id: 7,
  cartId: 24,
  productId: 93,
  price: 1000,
  dimensions: '12x12',
  customizations: '[{"Background Color":""},{"Name Color":""},{"Name":""}]',
  // imageSrc - need only the first picture
  // imageAlt - need only the first picture
  // craftingTime
};

const products = [
  {
    id: 1,
    name: 'Artwork Tee',
    href: `/`,
    price: '$32.00',
    dimensions: '12x12',
    // size: 'Medium',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg',
    imageAlt: 'Front side of mint cotton t-shirt with wavey lines pattern.',
    craftingTime: 10,
  },
];

export default async function CartOverview() {
  const session = await getServerSession(authOptions);

  // Redirect to login if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  //   console.log(session.user);

  const cartId = session.user.cartId;

  //   {
  //     id: 15,
  //     cartId: 24,
  //     productId: 108,
  //     price: 3000,
  //     dimensions: '20x20',
  //     customizations: '[{"Background Color":""},{"Name Color":""},{"Name":""}]'
  //   }

  //   const cartItems = await prisma.cartItem.findMany({
  //     where: {
  //       cartId: cartId,
  //     },
  //   });

  //   console.log(cartItems);

  //   {
  //     id: 15,
  //     cartId: 24,
  //     productId: 108,
  //     price: 3000,
  //     dimensions: '20x20',
  //     customizations: '[{"Background Color":""},{"Name Color":""},{"Name":""}]',
  //     cart: { id: 24, userId: 25 }
  //   }

  //   const cartItemsWithImages = await prisma.cartItem.findMany({
  //     where: {
  //       cartId: cartId,
  //     },
  //     include: {
  //       cart: true,
  //     },
  //   });

  //   console.log(cartItemsWithImages);

  const cartItems = await prisma.cartItem.findMany({
    where: {
      cartId: cartId,
    },
    include: {
      product: {
        select: {
          craftingTime: true,
          imageUrls: {
            select: {
              imageSrc: true,
              imageAlt: true,
            },
          },
        },
      },
    },
  });

  console.log(cartItems);

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {products.map(product => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a
                            href={product.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </a>

                          {/* <Link
                            key={item.name}
                            href={item.href}
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            {item.name}
                          </Link> */}
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.dimensions}
                      </p>
                      {/* <p className="mt-1 text-sm text-gray-500">
                        {product.size}
                      </p> */}
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      {/* Crafting Time */}
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        <ClockIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                          aria-hidden="true"
                        />

                        <span>{`${product.craftingTime} days + shipping`}</span>
                      </p>

                      {/* Remove Buttom */}
                      <div className="ml-4">
                        <button
                          type="button"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Subtotal
                  </dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">
                    $96.00
                  </dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p>
                or{' '}
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
