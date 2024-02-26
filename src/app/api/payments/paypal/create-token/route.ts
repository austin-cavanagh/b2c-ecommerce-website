import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { jsonResponse, httpStatusCode } = await generateClientToken();
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error('Failed to generate client token:', error);
    res.status(500).send({ error: 'Failed to generate client token.' });
  }
}

// return client token for hosted-fields component
// app.post('/api/token', async (req, res) => {
//   try {
//     const { jsonResponse, httpStatusCode } = await generateClientToken();
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error('Failed to generate client token:', error);
//     res.status(500).send({ error: 'Failed to generate client token.' });
//   }
// });
