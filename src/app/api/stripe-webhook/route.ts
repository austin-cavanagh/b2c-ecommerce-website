'use server';
import 'server-only';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.STRIPE_CLI_ENDPOINT_SECRET as string;

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
  } catch (err) {
    if (err instanceof Error) {
      console.log('ERROR', err.message);
      return new Response(`Stripe webhook error: ${err.message}`, {
        status: 400,
      });
    } else {
      console.log('An unexpected error occurred');
      return new Response('An unexpected error occurred', {
        status: 400,
      });
    }
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      console.log(checkoutSession);

      const customerDetails = checkoutSession.customer_details;
      const totalAmount = checkoutSession.amount_total;

      if (checkoutSession.shipping_address_collection) {
        // delivery
      } else {
        // pickup
      }

      break;
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    default:
    //   console.log(`Unhandled event type ${event.type}`);
  }

  return new Response('Success!', {
    status: 200,
  });
}

export async function handleCheckoutSessionCompleted() {}
