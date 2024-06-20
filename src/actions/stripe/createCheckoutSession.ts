// STRIPE DOCS - STRIPE HOSTED PAGE

'use server';
import 'server-only';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { createOrderInPrisma } from '../cart/createOrder';
import { getServerSession } from 'next-auth';
import { ExtendSession } from '@/app/api/auth/[...nextauth]/route';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CustomSessionConfig extends Stripe.Checkout.SessionCreateParams {
  shipping_address_collection?: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection;
  shipping_options?: Stripe.Checkout.SessionCreateParams.ShippingOption[];
}

type CartItemIdsType = {
  productId: number;
  stripePriceId: string;
};

export async function createCheckoutSession(
  deliveryMethod: string,
  cartItemIds: CartItemIdsType[],
) {
  const session = (await getServerSession(authOptions)) as
    | ExtendSession
    | undefined;

  if (!session?.user || !session?.user.email) {
    return;
  }

  const userId = session?.user.userId;
  const userEmail = session?.user.email;

  let sessionUrl;

  const lineItems = cartItemIds.map(itemIds => {
    return {
      price: itemIds.stripePriceId,
      quantity: 1,
    };
  });

  try {
    // Store the incomplete order in the database
    const order = await createOrderInPrisma('Stripe', deliveryMethod);
    const orderId = order.newOrder.orderId;

    // Create the stripe session after so we can pass it the orderId
    const sessionConfig: CustomSessionConfig = {
      // payment_method_types: ['card'],
      // automatic_tax: { enabled: true },
      mode: 'payment',
      client_reference_id: String(userId),
      customer_email: userEmail,
      success_url: 'http://localhost:3000/account/orders',
      cancel_url: 'http://localhost:3000/cart',
      line_items: lineItems,
      metadata: {
        orderId: orderId,
      },
    };

    // Add delivery options if selected
    if (deliveryMethod === 'Delivery') {
      sessionConfig.shipping_address_collection = { allowed_countries: ['US'] };
      sessionConfig.shipping_options = [
        { shipping_rate: 'shr_1OuOOUJwHQ2aHYX93s0Wqofe' },
      ];
    }

    // Create stripe checkout session
    const session = await stripe.checkout.sessions.create(sessionConfig);
    sessionUrl = session.url;
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'statusCode' in error &&
      'message' in error
    ) {
      const stripeError = error as { statusCode: number; message: string };
      console.error(
        'Error: Failed to create a stripe checkout session:',
        stripeError.message,
      );

      return {
        status: stripeError.statusCode,
        message: stripeError.message,
      };
    } else {
      console.error('Unexpected error:', error);
      return {
        status: 'Error',
        message: 'An unexpected error occurred',
      };
    }
  }

  if (typeof sessionUrl === 'string') {
    redirect(sessionUrl);
  }
}
