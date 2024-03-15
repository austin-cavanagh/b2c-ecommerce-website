'use server';
import 'server-only';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  'whsec_ecb99a3eb9d8c376d0398c092d46d72d697a176800420ca58fd08ce466464448';

export async function POST(request: Request, response: Response) {
  const stripeSignature = request.headers.get('stripe-signature') as string;
  const body = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      stripeSignature,
      endpointSecret,
    );

    console.log('STRIPE_EVENT:', event);
  } catch (err) {
    console.log('ERROR', err);
    return new Response(`Stripe webhook error: ${err.message}`, {
      status: 400,
    });
  }

  console.log(`EVENT ${event.type}`);

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response('Success!', {
    status: 200,
  });
}
