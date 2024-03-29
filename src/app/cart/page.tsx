'use server';
import 'server-only';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Cart, { CartProps } from '@/components/cart/Cart';
import { createPaymentIntent } from '../shopping-cart/checkout/stripe/stripeActions';
import { CartItem } from '@prisma/client';
// import Stripe from './Stripe';

export default async function CartRoute() {
  const session: any = await getServerSession(authOptions);

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/sign-in');
  }

  // Get customer cart information
  const cartId = session.user.cartId;
  const cart = await prisma.cartItem.findMany({
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

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <Cart cart={cart} />

      {/* <Stripe /> */}
    </main>
  );
}
