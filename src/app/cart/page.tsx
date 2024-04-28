'use server';
import 'server-only';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Cart from '@/components/cart/Cart';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

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
              src: true,
              alt: true,
            },
          },
        },
      },
    },
  });

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <Cart cart={cart} />
    </main>
  );
}
