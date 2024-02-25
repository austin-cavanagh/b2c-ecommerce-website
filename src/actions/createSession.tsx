'use server';
import 'server-only';

import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export default async function CreateSession(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              price: '{{price_1OnarCJwHQ2aHYX9FEq6gqGi}}',
              quantity: 1,
            },
          ],
          mode: 'payment',
          // Redirected after the purchase
          return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({ clientSecret: session.client_secret });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    case 'GET':
      try {
        const session = await stripe.checkout.sessions.retrieve(
          req.query.session_id,
        );

        res.send({
          status: session.status,
          customer_email: session.customer_details.email,
        });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
      res.setHeader('Allow', req.method);
      res.status(405).end('Method Not Allowed');
  }
}
