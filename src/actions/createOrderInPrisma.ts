'use server';
import 'server-only';

import { CartItem } from '@prisma/client';
import { prisma } from '@/prisma/prisma';
import { getServerSession } from 'next-auth';
import { ExtendSession, authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function createOrderInPrisma(
  paymentProvider: string,
  deliveryMethod: string,
) {
  try {
    const session = (await getServerSession(authOptions)) as ExtendSession;

    // Check if session and session.user are defined
    if (!session.user?.userId || !session.user.cartId) {
      console.error('createOrderInPrisma: Session or user data is undefined');
      throw new Error('Unauthorized: Session or user data is missing');
    }

    // Now it's safe to assume session.user exists
    const { userId, cartId } = session.user;

    // Get cart items with the users cart id
    const cart = await prisma.cartItem.findMany({
      where: {
        cartId: cartId,
      },
      include: {
        product: {
          select: {
            name: true,
          },
        },
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

    // Prepare data for the order
    const orderData = {
      orderId: orderId,
      userId: userId,
      paymentStatus: 'pending',
      paymentProvider: paymentProvider,
      taxCost: taxCost,
      shippingCost: shippingCost,
      totalCost: itemsCost + shippingCost,
      deliveryMethod: deliveryMethod,
    };

    // Prepare data for the order items
    const orderItemsData = cart.map(item => ({
      name: item.product.name,
      orderId: orderId,
      productId: item.productId,
      price: item.price,
      stripePriceId: item.stripePriceId,
      orderItemStatus: 'pending',
    }));

    // Create order and order items in a transation
    const newOrderData = await prisma.$transaction(async transaction => {
      // Create the order
      const newOrder = await transaction.order.create({ data: orderData });

      // Replace placeholder orderId with the id from the new order not the orderId
      const updatedOrderItemsData = orderItemsData.map(item => ({
        ...item,
        orderId: newOrder.id,
      }));

      // Create the order items
      const newOrderItemsPromises = updatedOrderItemsData.map(itemData =>
        transaction.orderItem.create({ data: itemData }),
      );
      const newOrderItems = await Promise.all(newOrderItemsPromises);

      return { newOrder, newOrderItems };
    });

    return newOrderData;
  } catch (error) {
    console.error(
      'createOrderInPrisma.ts: Failed to create an order in prisma:',
      error,
    );
    throw new Error('Failed to create an order');
  }
}
