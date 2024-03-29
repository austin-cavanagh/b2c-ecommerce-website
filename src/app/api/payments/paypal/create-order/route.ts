import { createOrder } from '@/actions/payPalActions';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);

    return Response.json({ client_token });
  } catch (error) {
    console.error('Failed to create order:', error);
    res.status(500).json({ error: 'Failed to create order.' });
  }
}

// app.post('/api/orders', async (req, res) => {
//   try {
//     // use the cart information passed from the front-end to calculate the order amount detals
//     const { cart } = req.body;
//     const { jsonResponse, httpStatusCode } = await createOrder(cart);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error('Failed to create order:', error);
//     res.status(500).json({ error: 'Failed to create order.' });
//   }
// });
