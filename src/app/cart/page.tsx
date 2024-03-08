'use server';
import 'server-only';

import CartOverview from '@/components/cart/CartOverview';
import CartPage from '@/components/cart/CartPage';
import DeliveryMethods from '@/components/cart/DeliveryMethods';
import Example from '@/components/cart/DeliveryMethods';
import ShippingInformation from '@/components/cart/ShippingInformation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function CartRoute() {
  const session = await getServerSession(authOptions);

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/sign-in');
  }

  const cartId = session.user.cartId;

  const cartItems = await prisma.cartItem.findMany({
    where: {
      cartId: cartId,
    },
    include: {
      product: {
        select: {
          craftingTime: true,
          name: true,
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

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  // console.log(cartItems);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      {/* <CartPage /> */}
      <ShippingInformation cartItems={cartItems} />
      {/* <CartOverview /> */}
      {/* <DeliveryOptions /> */}
    </main>
  );
}
