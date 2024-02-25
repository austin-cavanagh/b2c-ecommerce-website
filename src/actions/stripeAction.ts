'use server';
import 'server-only';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export default async function stripeAction() {
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: 'price_1OnarCJwHQ2aHYX9FEq6gqGi',
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `http://localhost:3000/stripe?session_id={CHECKOUT_SESSION_ID}`,
    });

    console.log('RUNNING');
    console.log('RUNNING');
    console.log('RUNNING');
    console.log('RUNNING');

    return session.client_secret;
  } catch (err) {
    throw new Error(err);
  }
}
