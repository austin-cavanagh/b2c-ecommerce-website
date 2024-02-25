'use server';
import 'server-only';

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

const base = 'https://api-m.sandbox.paypal.com';

export async function getClientToken() {
  try {
    const { jsonResponse, httpStatusCode } = await generateClientToken();
    return jsonResponse.client_token;
  } catch (err) {
    console.log('getClientToken');
    throw new Error(err);
  }
}

// Generate a client token for rendering the hosted card fields
export async function generateClientToken() {
  const accessToken = await generateAccessToken();
  const url = `${base}/v1/identity/generate-token`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',
    },
  });

  return handleResponse(response);
}

export async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    console.log('handleResponse');
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

// Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs
export async function generateAccessToken() {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error('MISSING_API_CREDENTIALS');
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ':' + PAYPAL_CLIENT_SECRET,
    ).toString('base64');
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Failed to generate Access Token:', error);
  }
}
