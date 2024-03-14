// STRIPE DOCS - STRIPE HOSTED PAGE

'use server';
import { redirect } from 'next/navigation';
import 'server-only';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession() {
  let sessionUrl;

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/',
      automatic_tax: { enabled: true },
    });

    console.log('SESSION', session);

    sessionUrl = session.url;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error: Failed to create a stripe checkout session:',
        error.message,
      );
      return {
        status: 'Error',
        message: error.message,
      };
    } else {
      console.error('Unexpected error:', error);
      return {
        status: 'Error',
        message: 'An unexpected error occurred',
      };
    }
  }
}
