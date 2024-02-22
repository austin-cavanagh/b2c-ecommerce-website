'use server';
import 'server-only';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export default async function sendEmailVerification(
  name: string,
  email: string,
  verifyUrl: string,
) {
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
          body { font-family: Arial, sans-serif; }
          .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            outline: none;
            color: #fff;
            background-color: #4CAF50;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #999;
          }

          .button:hover {background-color: #3e8e41}

          .button:active {
            background-color: #3e8e41;
            box-shadow: 0 5px #666;
            transform: translateY(4px);
          }
        </style>
      </head>
      <body>
        <h1>Hello, ${name}!</h1>
        <p>Thank you for signing up with Cavanagh Woodcrafts. We're excited to have you join our community.</p>
        <p>Please click the button below to verify your email address and activate your account:</p>
        <a href="${verifyUrl}" target="_blank" class="button">Verify</a>
        <p>If you did not sign up for a Cavanagh Woodcrafts account, please disregard this email.</p>
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
    console.error('Error sending email:', err);
  }
}
