const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
require('dotenv').config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const sesClient = new SESClient({
  region: 'us-west-1',
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

const params = {
  Source: 'austin.cavanagh.cs@gmail.com',
  Destination: { ToAddresses: ['austin.cavanagh.cs@gmail.com'] },
  Message: {
    Subject: { Data: 'Test Email' },
    Body: { Text: { Data: 'Hello, world!' } },
  },
};

const run = async () => {
  try {
    const data = await sesClient.send(new SendEmailCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.error(err);
  }
};

run();
