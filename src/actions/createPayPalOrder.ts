'use server';
import 'server-only';

import { generateAccessToken } from '@/functions/generateAccessToken';
import { handleResponse } from '@/functions/handleResponse';
import { ExtendedCartItem } from '@/components/cart/Cart';
import { getServerSession } from 'next-auth';
import {
  ExtendSession,
  authOptions,
} from '../app/api/auth/[...nextauth]/route';
import { createOrderInPrisma } from './createOrderInPrisma';

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
    console.error(
      'createPayPalOrder.ts: Failed to create paypal order:',
      error,
    );
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
  // Get the session to ensure the user is authenticated
  const session: ExtendSession | null = await getServerSession(authOptions);

  if (
    !session ||
    !session.user ||
    !session.user.userId ||
    !session.user.cartId
  ) {
    console.error('Session not present in createPayPalOrder.ts');
    return {
      httpStatusCode: 401,
      jsonResponse: 'You must be logged in to perform this action',
    };
  }

  // Create order and order items in prisma
  const { newOrder, newOrderItems } = await createOrderInPrisma(
    session.user.userId,
    session.user.cartId,
    'paypal',
    deliveryMethod,
  );

  // Calculate the cost of all items in the cart
  const itemsTotal = newOrderItems.reduce((acc, item) => {
    const itemPrice = item.price;
    const total = acc + itemPrice;
    return total;
  }, 0);
  const itemsTotalString = (itemsTotal / 100).toFixed(2);

  // Calculate the cost of shipping
  const shippingPreference =
    newOrder.deliveryMethod === 'Pickup' ? 'NO_SHIPPING' : 'GET_FROM_FILE';
  const shippingCost = newOrder.shippingCost;
  const shippingCostString = (newOrder.shippingCost / 100).toFixed(2);

  // Calculate the total price
  const totalCostString = ((itemsTotal + shippingCost) / 100).toFixed(2);

  // Create an array of items to pass to paypal for itemized checkout
  const itemsArray = newOrderItems.map(item => {
    return {
      name: item.name,
      quantity: '1',
      unit_amount: {
        currency_code: 'USD',
        value: (item.price / 100).toFixed(2),
      },
    };
  });

  const payload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: newOrder.orderId,
        amount: {
          currency_code: 'USD',
          value: totalCostString,
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: itemsTotalString,
            },
            ...(deliveryMethod !== 'Pickup' && {
              shipping: {
                currency_code: 'USD',
                value: shippingCostString,
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

  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
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
