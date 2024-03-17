'use server';
import 'server-only';

import { ExtendSession } from '@/app/api/auth/[...nextauth]/route';
import { CartItem } from '@prisma/client';
import { prisma } from '@/prisma/prisma';

export async function createOrderInPrisma(
  userId: number,
  cartId: number,
  paymentProvider: string,
  deliveryMethod: string,
) {
  // Get cart items with the users cart id
  const cart = await prisma.cartItem.findMany({
    where: {
      cartId: cartId,
    },
  });

  // Create order id based on a 14 digit date with a random 4 digit number at the end
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.T]/g, '')
    .slice(0, 14);
  const randomPart = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const orderId = `${timestamp}-${randomPart}`;

  // Calculate cost for tax, shipping, and items
  const taxCost: number = 0;
  const shippingCost: number = deliveryMethod === 'Delivery' ? 1500 : 0;
  const itemsCost: number = cart.reduce((acc: number, item: CartItem) => {
    return acc + item.price;
  }, 0);

  // Create order in prisma
  const newOrder = await prisma.order.create({
    data: {
      orderId: orderId,
      userId: userId,
      orderStatus: 'pending',
      paymentStatus: 'pending',
      paymentProvider: paymentProvider,
      deliveryMethod: deliveryMethod,
      shippingCost: shippingCost,
      taxCost: taxCost,
      totalCost: itemsCost + shippingCost,
    },
  });

  console.log('NEW_ORDER', newOrder);

  // cart.forEach(async item => {
  //   await prisma.orderItem.create({
  //     data: {
  //       orderId: newOrder.id,
  //       productId: item.productId,
  //       price: item.price,
  //       stripePriceId: item.stripePriceId,
  //     },
  //   });
  // });
}
