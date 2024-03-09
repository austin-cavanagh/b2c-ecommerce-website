'use server';
import 'server-only';

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Cart from '@/components/cart/Cart';
import { createPaymentIntent } from '../shopping-cart/checkout/stripe/stripeActions';

export default async function CartRoute() {
  const session: any = await getServerSession(authOptions);

  // Redirect to login if not authenticated
  if (!session) {
    redirect('/sign-in');
  }

  if (session!) return;

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

  // console.log(cartItems);

  // Stripe
  const items = [{ id: 'xl-tshirt', amount: 1000 }];
  const paymentIntent = await createPaymentIntent(items);
  const clientSecret = paymentIntent.client_secret;

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <Cart cartItems={cartItems} clientSecret={clientSecret} />
    </main>
  );
}
