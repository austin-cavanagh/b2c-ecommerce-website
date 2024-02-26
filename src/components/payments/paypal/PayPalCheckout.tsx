import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState, useEffect } from 'react';
import PayPalForm from './PayPalForm';

export default function PayPalCheckout() {
  const [clientToken, setClientToken] = useState(null);

  const initialOptions = {
    'client-id': 'test',
    'enable-funding': 'venmo',
    'disable-funding': 'paylater',
    'data-sdk-integration-source': 'integrationbuilder_ac',
    'data-client-token': clientToken,
    components: 'hosted-fields,buttons',
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/token', {
        method: 'POST',
      });
      const { client_token } = await response.json();
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
