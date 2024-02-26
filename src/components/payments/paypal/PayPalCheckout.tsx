'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';
import PayPalForm from './PayPalForm';
import { generateClientToken } from '@/actions/payPalActions';

export default function PayPalCheckout() {
  const [clientToken, setClientToken] = useState(null);

  const initialOptions = {
    clientId: 'test',
    'merchant-id': 'sb-ykaq829670763@business.example.com',
    'enable-funding': 'venmo',
    'disable-funding': 'paylater',
    'data-sdk-integration-source': 'integrationbuilder_ac',
    dataClientToken: clientToken,
    components: 'hosted-fields,buttons',
  };

  useEffect(() => {
    (async () => {
      const response = await generateClientToken();
      const client_token = response.jsonResponse.client_token;
      setClientToken(client_token);
    })();
  }, []);

  return (
    <>
      {clientToken ? (
        <PayPalScriptProvider options={initialOptions}>
          <PayPalForm />
        </PayPalScriptProvider>
      ) : (
        <h4>WAITING ON CLIENT TOKEN</h4>
      )}
    </>
  );
}
