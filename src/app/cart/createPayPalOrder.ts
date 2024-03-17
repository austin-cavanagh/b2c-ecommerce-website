'use server';
import 'server-only';

import { generateAccessToken } from '@/functions/generateAccessToken';
import { handleResponse } from '@/functions/handleResponse';
import { ExtendedCartItem } from '@/components/cart/Cart';
import { getServerSession } from 'next-auth';
import { ExtendSession, authOptions } from '../api/auth/[...nextauth]/route';

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
  const session: ExtendSession | null = await getServerSession(authOptions);
  console.log('SESSION', session);

  if (!session || !session.user) {
    console.error('Session not present in createPayPalOrder.ts');
    return {
      httpStatusCode: 401,
      jsonResponse: 'You must be logged in to perform this action',
    };
  }

  // CALCULATE COSTS
  // CALCULATE COSTS
  // CALCULATE COSTS

  // Calculate the cost of all items in the cart
  const itemsTotal = cart.reduce((acc, item) => {
    const itemPrice = item.price / 100;
    const total = acc + itemPrice;
    return total;
  }, 0);
  const itemsTotalString = itemsTotal.toFixed(2);

  // Calculate the cost of shipping
  const shippingPreference =
    deliveryMethod === 'Pickup' ? 'NO_SHIPPING' : 'GET_FROM_FILE';
  const shippingPrice = deliveryMethod === 'Pickup' ? 0 : 1500;
  const shippingPriceString = (shippingPrice / 100).toFixed(2);

  // Calculate the total price
  const totalPriceString = (itemsTotal + shippingPrice / 100).toFixed(2);

  // Create an array of items to pass to paypal for itemized checkout
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

  // CALCULATE COSTS
  // CALCULATE COSTS
  // CALCULATE COSTS

  // ADD ORDER TO DATABASE
  // ADD ORDER TO DATABASE
  // ADD ORDER TO DATABASE

  //   orderId         String      @unique
  //   userId          Int
  //   orderStatus     String
  //   paymentStatus   String
  //   paymentProvider String
  //   shippingCost    Int
  //   deliveryMethod  String

  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.T]/g, '')
    .slice(0, 14);
  const randomPart = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const orderId = `${timestamp}-${randomPart}`;

  const newOrder = await prisma.order.create({
    data: {
      orderId: orderId,
      userId: session.user.userId,
      orderStatus: 'pending',
      paymentStatus: 'pending',
      paymentProvider: 'paypal',
      shippingCost: shippingPrice,
      deliveryMethod: deliveryMethod,
    },
  });

  //   orderId       Int
  //   productId     Int
  //   price         Int
  //   stripePriceId String

  cart.forEach(async item => {
    await prisma.orderItem.create({
      data: {
        orderId: newOrder.id,
        productId: item.productId,
        price: item.price,
        stripePriceId: item.stripePriceId,
      },
    });
  });

  // ADD ORDER TO DATABASE
  // ADD ORDER TO DATABASE
  // ADD ORDER TO DATABASE

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
              value: itemsTotalString,
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
