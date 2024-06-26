'use server';
import {
  Address,
  ShippingAddress,
  updateOrder,
} from '@/actions/cart/updateOrder';
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

      // Ensuring metadata and orderId exist before proceeding
      if (!checkoutSession.metadata || !checkoutSession.metadata.orderId) {
        console.log('Metadata or orderId is missing');
        return new Response('Metadata or orderId is missing', { status: 400 });
      }

      // Update the incomplete order in the database with the completed transation details
      const orderId = checkoutSession.metadata.orderId;
      const providerOrderId = checkoutSession.id;
      // console.log('PROVIDER_ORDER_ID', providerOrderId);

      const shippingAddress: any = checkoutSession.shipping_details;

      const name: string | undefined | null =
        checkoutSession.customer_details?.name;
      // console.log('NAME', name);

      await updateOrder(orderId, providerOrderId, shippingAddress);

      break;

    // case 'payment_intent.succeeded':
    //   const paymentIntentSucceeded = event.data.object;
    //   // Then define and call a function to handle the event payment_intent.succeeded
    //   break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response('Success!', {
    status: 200,
  });
}
