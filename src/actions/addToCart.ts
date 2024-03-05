'use server';

import { redirect } from 'next/navigation';
import { FormEvent } from 'react';

export default async function addToCart(formData: FormData) {
  const standardData = [
    'size[productId]',
    'size[price]',
    'size[dimension]',
    '$ACTION_ID_6119eab06d45b529606f64ba108a3caa62cc1dd4',
    'size[id]',
  ];

  const productId = formData.get('size[productId]') as string;
  const price = formData.get('size[price]') as string;
  const size = formData.get('size[dimension]') as string;

  const customizationOptions = [];

  const formObject = Object.fromEntries(formData);

  for (const [label, value] of Object.entries(formObject)) {
    if (!standardData.includes(label)) {
      customizationOptions.push({ [label]: value });
    }
  }

  const cartItem = {
    productId: Number(productId),
    price: Number(price),
    dimension: size,
    customizationOptions: customizationOptions,
  };

  //   console.log('formData', formData);
  console.log('cartItem', cartItem);

  //   redirect('/cart');
}
