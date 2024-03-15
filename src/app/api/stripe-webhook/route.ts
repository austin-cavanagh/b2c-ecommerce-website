// STRIPE DOCS - CUSTOM PAYMENT FLOW

// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// const stripe = require('stripe')('sk_test_...');
// const express = require('express');
// const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  'whsec_ecb99a3eb9d8c376d0398c092d46d72d697a176800420ca58fd08ce466464448';

export async function POST(request: Request, response: Response) {
  const myHeaders = request.headers;

  console.log(myHeaders);

  // const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return new Response(`Stripe webhook error: ${err.message}`, {
      status: 400,
    });
  }

  // Handle the event
  console.log(`Unhandled event type ${event.type}`);

  return new Response('Success!', {
    status: 200,
  });
}

// app.post(
//   '/webhook',
//   express.raw({ type: 'application/json' }),
//   (request, response) => {
//     const sig = request.headers['stripe-signature'];

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//     } catch (err) {
//       response.status(400).send(`Webhook Error: ${err.message}`);
//       return;
//     }

//     // Handle the event
//     console.log(`Unhandled event type ${event.type}`);

//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   },
// );
