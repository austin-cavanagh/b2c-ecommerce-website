// STRIPE DOCS - STRIPE HOSTED PAGE

'use server';
import { CartItemIds } from '@/components/cart/Cart';
import { redirect } from 'next/navigation';
import 'server-only';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CustomSessionConfig extends Stripe.Checkout.SessionCreateParams {
  shipping_address_collection?: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection;
  shipping_options?: Stripe.Checkout.SessionCreateParams.ShippingOption[];
}

export async function createCheckoutSession(
  deliveryMethod: string,
  cartItemIds: CartItemIds[],
) {
  let sessionUrl;

  const lineItems = cartItemIds.map(itemIds => {
    return {
      price: itemIds.stripePriceId,
      quantity: 1,
    };
  });

  const sessionConfig: CustomSessionConfig = {
    // payment_method_types: ['card'],
    // automatic_tax: { enabled: true },
    mode: 'payment',
    client_reference_id: '25',
    customer_email: 'austin.cavanagh.cs@gmail.com',
    success_url: 'http://localhost:3000/order/success',
    cancel_url: 'http://localhost:3000/cart',
    line_items: lineItems,
  };

  // Add delivery options if selected
  if (deliveryMethod === 'Delivery') {
    sessionConfig.shipping_address_collection = { allowed_countries: ['US'] };
    sessionConfig.shipping_options = [
      { shipping_rate: 'shr_1OuOOUJwHQ2aHYX93s0Wqofe' },
    ];
  }

  try {
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
