'use server';
import 'server-only';

import { generateAccessToken } from '@/functions/generateAccessToken';
import { handleResponse } from '@/functions/handleResponse';
import { prisma } from '@/prisma/prisma';
import { updatePayPalOrder } from './prisma/updatePayPalOrder';

const base = 'https://api-m.sandbox.paypal.com';

export async function capturePayPalOrder(orderID: string) {
  try {
    // jsonResponse is the order data
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);

    // If the transaction is successul update the order in prisma
    if (
      jsonResponse.status === 'COMPLETED' &&
      jsonResponse.purchase_units[0].payments.captures[0].status === 'COMPLETED'
    ) {
      updatePayPalOrder(jsonResponse);
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
