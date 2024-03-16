'use server';
import 'server-only';

import { PayPalCartItem } from './PayPal';
import { generateAccessToken } from '@/functions/generateAccessToken';
import { handleResponse } from '@/functions/handleResponse';

const base = 'https://api-m.sandbox.paypal.com';

export async function createPayPalOrder(cart: PayPalCartItem[]) {
  try {
    const { jsonResponse, httpStatusCode } = await createOrder(cart);

    console.log(jsonResponse);

    return {
      status: httpStatusCode,
      message: jsonResponse,
    };
  } catch (error) {
    console.error('Failed to create paypal order:', error);
    return {
      status: 500,
      message: 'Failed to create paypal order',
    };
  }
}

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
async function createOrder(cart: PayPalCartItem[]) {
  // use the cart information passed from the front-end to calculate the purchase unit details
  //   console.log(
  //     'shopping cart information passed from the frontend createOrder() callback:',
  //     cart,
  //   );

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: '100.00',
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
}
