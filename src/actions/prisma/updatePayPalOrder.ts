'use server';
import 'server-only';

import { prisma } from '@/prisma/prisma';
import { redirect } from 'next/navigation';

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

type PayPalShipping = {
  name: PayPalName;
  address: PayPalAddress | undefined;
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

type PayPalPurchaseUnit = {
  reference_id: string;
  shipping?: PayPalShipping;
  payments: PayPalPayment;
};

type PayPalPayer = {
  name: PayPalName;
  email_address: string;
  payer_id: string;
  address: PayPalAddress;
};

type PayPalOrder = {
  id: string;
  status: string;
  payment_source: {
    paypal: {
      email_address: string;
      account_id: string;
      account_status: string;
      name: PayPalName;
      address: PayPalAddress;
    };
  };
  purchase_units: PayPalPurchaseUnit[];
  payer: PayPalPayer;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>;
};

export async function updatePayPalOrder(orderData: PayPalOrder) {
  try {
    const orderId = orderData.purchase_units[0].reference_id;
    const providerOrderId = orderData.id;
    const shippingAddress = orderData.purchase_units[0].shipping;

    // Begin a transaction to update both the order and its items atomically
    await prisma.$transaction(async prisma => {
      // Update the order
      const updatedOrder = await prisma.order.update({
        where: { orderId: orderId },
        data: {
          paymentStatus: 'paid',
          providerOrderId: providerOrderId,
          craftingStarted: new Date(),
          shippingAddress: shippingAddress,
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
  } catch (error) {
    console.error(
      'updatePayPalOrder.ts: Error updating PayPal order in database',
      error,
    );
    throw new Error('Failed to update PayPal order in prisma');
  }
}
