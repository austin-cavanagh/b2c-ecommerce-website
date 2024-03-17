'use server';
import 'server-only';

import { generateAccessToken } from '@/functions/generateAccessToken';
import { handleResponse } from '@/functions/handleResponse';
import { ExtendedCartItem } from '@/components/cart/Cart';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

const base = 'https://api-m.sandbox.paypal.com';

export async function createPayPalOrder(
  cart: ExtendedCartItem[],
  deliveryMethod: string,
) {
  try {
    const { jsonResponse, httpStatusCode } = await createOrder(
      cart,
      deliveryMethod,
    );

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
async function createOrder(cart: ExtendedCartItem[], deliveryMethod: string) {
  const session = await getServerSession(authOptions);
  console.log('SESSION', session);

  // CALCULATE COSTS
  // CALCULATE COSTS
  // CALCULATE COSTS

  const itemTotal = cart.reduce((acc, item) => {
    const itemPrice = item.price / 100;
    const total = acc + itemPrice;
    return total;
  }, 0);
  const itemTotalString = itemTotal.toFixed(2);

  const shippingPreference =
    deliveryMethod === 'Pickup' ? 'NO_SHIPPING' : 'GET_FROM_FILE';

  const shippingPrice = deliveryMethod === 'Pickup' ? 0 : 1500;
  const shippingPriceString = (shippingPrice / 100).toFixed(2);

  const totalPriceString = (itemTotal + shippingPrice / 100).toFixed(2);

  const itemsArray = cart.map(item => {
    return {
      name: item.product.name,
      quantity: '1',
      unit_amount: {
        currency_code: 'USD',
        value: (item.price / 100).toFixed(2),
      },
    };
  });

  //   orderId         String      @unique
  //   userId          Int
  //   orderStatus     String
  //   paymentStatus   String
  //   paymentProvider String
  //   paymentMethod   String
  //   tax             Int
  //   shippingCost    Int
  //   shippingMethod  String

  //   orderId       Int
  //   productId     Int
  //   price         Int
  //   stripePriceId String

  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.T]/g, '')
    .slice(0, 14);
  const randomPart = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const orderId = `${timestamp}-${randomPart}`;

  // BREAK
  // BREAK
  // BREAK

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: orderId,
        amount: {
          currency_code: 'USD',
          value: totalPriceString,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: itemTotalString,
            },
            ...(deliveryMethod !== 'Pickup' && {
              shipping: {
                currency_code: 'USD',
                value: shippingPriceString,
              },
            }),
          },
        },
        items: itemsArray,
      },
    ],
    application_context: {
      shipping_preference: shippingPreference,
    },
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
