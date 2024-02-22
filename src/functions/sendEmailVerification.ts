'use server';
import 'server-only';

const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
require('dotenv').config();

export default async function sendEmailVerification(
  name: string,
  email: string,
) {
  const sesClient = new SESClient({
    region: 'us-west-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const params = {
    Source: 'austin.cavanagh.cs@gmail.com',
    Destination: { ToAddresses: ['austin.cavanagh.cs@gmail.com'] },
    Message: {
      Subject: { Data: 'Test Email' },
      Body: { Text: { Data: `Hello ${name}!` } },
    },
  };

  try {
    const data = await sesClient.send(new SendEmailCommand(params));
  } catch (err) {
    console.error(err);
  }
}
