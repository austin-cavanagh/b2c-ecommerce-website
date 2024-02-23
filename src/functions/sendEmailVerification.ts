'use server';
import 'server-only';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export default async function sendEmailVerification(
  name: string,
  email: string,
  verificationToken: string,
) {
  const firstName = name.split(' ')[0];
  const verifyUrl = `http://localhost:3000/api/verify-email/${verificationToken}`;

  const sesClient = new SESClient({
    region: 'us-west-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    },
  });

  const emailHtml = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; font-size: 20px; } /* Increased font size */
          a {
            color: #007bff; /* Bootstrap primary blue, for example */
            text-decoration: underline;
            font-weight: bold; /* Make the entire link bold */
          }
          a:hover {
            color: #0056b3; /* Darker blue on hover */
          }
        </style>
      </head>
      <body>
        <p>Hi ${firstName}!</p>
        <p>Thank you for signing up with Cavanagh Woodcrafts. We're excited to have you join our community!</p>
        <p>Please click <a href="${verifyUrl}" target="_blank"><strong>HERE</strong></a> to verify your email address and activate your account.</p>
        <p>If you did not sign up for a Cavanagh Woodcrafts account, please disregard this email.</p>
        <p>Thank you,</p>
        <p>Julie</p>
      </body>
    </html>
  `;

  const params = {
    Source: 'austin.cavanagh.cs@gmail.com',
    Destination: { ToAddresses: [email] },
    Message: {
      Subject: { Data: 'Verify Your Cavanagh Woodcrafts Account' },
      Body: {
        Html: {
          Data: emailHtml,
        },
      },
    },
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
  } catch (err) {
    console.error('Error sending verification email:', err);
  }
}
