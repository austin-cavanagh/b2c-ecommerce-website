'use client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';
import { PaymentForm } from './PayPalCheckout';
import { getClientToken } from '@/actions/getClientToken';

export default function PayPalProvider() {
  const [clientToken, setClientToken] = useState<string>('');

  const initialOptions = {
    clientId: 'test',
    'enable-funding': 'venmo',
    'disable-funding': 'paylater',
    'data-sdk-integration-source': 'integrationbuilder_ac',
    dataClientToken: clientToken,
    components: 'hosted-fields,buttons',
  };

  useEffect(() => {
    (async () => {
      const client_token = await getClientToken();
      setClientToken(client_token);
    })();
  }, []);

  console.log(initialOptions);

  return (
    <>
      {clientToken ? (
        <PayPalScriptProvider options={initialOptions}>
          <PaymentForm />
        </PayPalScriptProvider>
      ) : (
        <h4>WAITING ON CLIENT TOKEN</h4>
      )}
    </>
  );
}
