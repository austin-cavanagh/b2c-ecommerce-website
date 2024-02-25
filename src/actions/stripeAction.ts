'use server';
import 'server-only';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export async function stripeAction() {
  const deliveryOption = '';

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: 'price_1OnarCJwHQ2aHYX9FEq6gqGi',
          quantity: 10,
        },
      ],
      mode: 'payment',
      return_url: `http://localhost:3000/stripe/return?session_id={CHECKOUT_SESSION_ID}`,

      shipping_address_collection:
        deliveryOption === 'delivery'
          ? {
              allowed_countries: ['US'],
            }
          : undefined,
    });

    return session.client_secret;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getOrderOutcome(sessionId: string) {
  try {
    console.log(sessionId);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return {
      status: session.status,
      customer_email: session.customer_details?.email,
    };
  } catch (err) {
    throw new Error(err);
  }
}
