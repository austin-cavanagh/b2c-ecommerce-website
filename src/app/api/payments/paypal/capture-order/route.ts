import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error('Failed to create order:', error);
    res.status(500).json({ error: 'Failed to capture order.' });
  }
}

// app.post('/api/orders/:orderID/capture', async (req, res) => {
//   try {
//     const { orderID } = req.params;
//     const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error('Failed to create order:', error);
//     res.status(500).json({ error: 'Failed to capture order.' });
//   }
// });
