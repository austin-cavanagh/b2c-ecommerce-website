'use server';
import 'server-only';

import { generateAccessToken } from '@/functions/generateAccessToken';
import { handleResponse } from '@/functions/handleResponse';
import { prisma } from '@/prisma/prisma';

const base = 'https://api-m.sandbox.paypal.com';

export async function capturePayPalOrder(orderID: string) {
  try {
    // jsonResponse is the order data
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

    if (jsonResponse.status === 'COMPLETED') {
      const orderId = jsonResponse.purchase_units[0].reference_id;
      const providerOrderId = jsonResponse.id;

      const transaction = jsonResponse.purchase_units[0].payments.captures[0];
      const paymentStatus =
        transaction.status === 'COMPLETED' ? 'paid' : 'pending';

      // Shipping will only be inside the purchase_units array if we collect it
      const shippingAddress = jsonResponse.purchase_units[0].shipping;
      // console.log('SHIPPING_ADDRESS', shippingAddress);

      // Begin a transaction to update both the order and its items atomically
      await prisma.$transaction(async prisma => {
        // Update the order
        const updatedOrder = await prisma.order.update({
          where: { orderId: orderId },
          data: {
            paymentStatus: paymentStatus,
            providerOrderId: providerOrderId,
            shippingAddress: shippingAddress
              ? JSON.stringify(shippingAddress)
              : undefined,
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
    }

    return {
      status: httpStatusCode,
      message: jsonResponse,
    };
  } catch (error) {
    console.error('Failed to create order:', error);
    return {
      status: 500,
      message: 'Failed to capture order',
    };
  }
}

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
async function captureOrder(orderID: string) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
  });

  return handleResponse(response);
}
