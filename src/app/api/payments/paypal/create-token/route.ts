import { generateClientToken } from '@/actions/payPalActions';
import { NextRequest, NextResponse } from 'next/server';

export async function POST() {
  try {
    const data = await generateClientToken();
    const client_token = data.jsonResponse.client_token;
    return Response.json({ client_token });
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
