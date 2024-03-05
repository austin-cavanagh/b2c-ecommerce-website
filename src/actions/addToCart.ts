'use server';

import { redirect } from 'next/navigation';
import { FormEvent } from 'react';

export default async function addToCart(formData: FormData) {
  const productId = formData.get('size[productId]') as string;
  const price = formData.get('size[price]') as string;
  const size = formData.get('size[dimension]') as string;

  const standardData = [
    'size[productId]',
    'size[price]',
    'size[dimension]',
    '$ACTION_ID_6119eab06d45b529606f64ba108a3caa62cc1dd4',
    'size[id]',
  ];
  const customizations = [];
  const formObject = Object.fromEntries(formData);

  for (const [label, value] of Object.entries(formObject)) {
    if (!standardData.includes(label)) {
      customizations.push({ [label]: value });
    }
  }

  const cartItem = {
    productId: productId,
    price: price,
    dimension: size,
    customizations: customizations,
  };

  console.log('cartItem', cartItem);
  //   console.log('formData', formData);

  //   redirect('/cart');
}
