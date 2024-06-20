'use server';
import 'server-only';

import { prisma } from '@/prisma/prisma';
import { getServerSession } from 'next-auth';
import { ExtendSession } from '@/app/api/auth/[...nextauth]/route';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

type PayPalAddress = {
  country_code: string;
  address_line_1?: string;
  admin_area_2?: string; // City
  admin_area_1?: string; // State
  postal_code?: string;
  [key: string]: any; // Adding index signature to satisfy Prisma's JSON input requirement
};

type PayPalName = {
  full_name?: string;
  given_name?: string;
  surname?: string;
  [key: string]: any; // Adding index signature
};

type PayPalCapture = {
  id: string;
  status: string;
  amount: {
    currency_code: string;
    value: string;
  };
  final_capture?: boolean;
  seller_protection?: {
    status: string;
    dispute_categories: string[];
  };
  seller_receivable_breakdown?: {
    gross_amount: {
      currency_code: string;
      value: string;
    };
    paypal_fee: {
      currency_code: string;
      value: string;
    };
    net_amount: {
      currency_code: string;
      value: string;
    };
  };
};

type PayPalPayment = {
  captures: PayPalCapture[];
};

type PayPalPayer = {
  name: PayPalName;
  email_address: string;
  payer_id: string;
  address: PayPalAddress;
};

export type Address = {
  [key: string]: string;
};

export type ShippingAddress = {
  address: {
    [key: string]: string | null;
  };
};

export async function updateOrder(
  orderId: string,
  providerOrderId: string,
  shippingAddress: ShippingAddress | undefined | null,
) {
  const session: ExtendSession | null = await getServerSession(authOptions);
  const cartId = session?.user?.cartId;

  try {
    // Begin a transaction to update both the order and its items atomically
    await prisma.$transaction(async prisma => {
      // Update the order
      const updatedOrder = await prisma.order.update({
        where: { orderId: orderId },
        data: {
          paymentStatus: 'paid',
          providerOrderId: providerOrderId,
          craftingStarted: new Date(),
          shippingAddress: shippingAddress || undefined,
        },
      });

      // Update the order items
      await prisma.orderItem.updateMany({
        where: { orderId: updatedOrder.id },
        data: {
          orderItemStatus: 'crafting',
        },
      });
    });

    // Clear the shopping cart after the transaction is successful
    await prisma.cartItem.deleteMany({
      where: { cartId },
    });
  } catch (error) {
    console.error(
      'updatePayPalOrder.ts: Error updating PayPal order in database',
      error,
    );
    throw new Error('Failed to update PayPal order in prisma');
  }
}
