// This is your test secret API key.
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

'use server';
import 'server-only';

import Stripe from 'stripe';

// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const calculateTax = async (items, currency) => {
  const taxCalculation = await stripe.tax.calculations.create({
    currency,
    customer_details: {
      address: {
        line1: '920 5th Ave',
        city: 'Seattle',
        state: 'WA',
        postal_code: '98104',
        country: 'US',
      },
      address_source: 'shipping',
    },
    line_items: items.map(item => buildLineItem(item)),
  });

  return taxCalculation;
};

const buildLineItem = item => {
  return {
    amount: item.amount, // Amount in cents
    reference: item.id, // Unique reference for the item in the scope of the calculation
  };
};

// Securely calculate the order amount, including tax
const calculateOrderAmount = (items, taxCalculation) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total with any exclusive taxes on the server to prevent
  // people from directly manipulating the amount on the client
  let orderAmount = 1400;
  orderAmount += taxCalculation.tax_amount_exclusive;
  return orderAmount;
};

export async function createPaymentIntent(items) {
  //   const { items } = req.body;
  const taxCalculation = await calculateTax(items, 'usd');
  const amount = calculateOrderAmount(items, taxCalculation);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      tax_calculation: taxCalculation.id,
    },
  });

  //   console.log(paymentIntent);

  return paymentIntent;

  //   res.send({
  //     clientSecret: paymentIntent.client_secret,
  //   });

  // Invoke this method in your webhook handler when `payment_intent.succeeded` webhook is received
  const handlePaymentIntentSucceeded = async paymentIntent => {
    // Create a Tax Transaction for the successful payment
    stripe.tax.transactions.createFromCalculation({
      calculation: paymentIntent.metadata['tax_calculation'],
      reference: 'myOrder_123', // Replace with a unique reference from your checkout/order system
    });
  };
}

export async function createCheckoutSession() {
  const product = await stripe.products.create({
    name: 'Custom Product Name',
    description: 'Custom Product Description', // Optional
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 2000,
    currency: 'usd',
  });

  const session = await stripe.checkout.sessions.create({
    success_url: 'https://example.com/success',
    line_items: [
      {
        price: price.id,
        quantity: 5,
      },
    ],
    mode: 'payment',
  });

  return session;
}
