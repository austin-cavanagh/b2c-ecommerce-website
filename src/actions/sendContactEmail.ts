'use server';
import 'server-only';

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { redirect } from 'next/navigation';

export default async function sendContactEmail(formData: FormData) {
  const firstName = formData.get('first-name') as string;
  const lastName = formData.get('last-name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  const sesClient = new SESClient({
    region: 'us-west-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    },
  });

  const emailHtml = `
    <html>
      <body>
        <p>You have received a new contact message from your website:</p>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      </body>
    </html>
  `;

  const params = {
    Source: 'austin.cavanagh.cs@gmail.com',
    Destination: { ToAddresses: ['austin.cavanagh.cs@gmail.com'] },
    Message: {
      Subject: { Data: 'New Contact Message from Your Website' },
      Body: {
        Html: {
          Data: emailHtml,
        },
      },
    },
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
    console.log('Contact message sent successfully');
  } catch (err) {
    console.error('Error sending contact message:', err);
  }

  redirect('/');
}
