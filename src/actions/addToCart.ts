'use server';

import { redirect } from 'next/navigation';
import { FormEvent } from 'react';

export default async function addToCart(formData: FormData) {
  const productId = formData.get('size[productId]') as string;
  const price = formData.get('size[price]') as string;
  const size = formData.get('size[dimension]') as string;

  const cartItem = {
    productId: productId,
    price: price,
    dimension: size,
    // customizations: JSON.stringify({
    //   name: 'John Smith',
    //   team: 'Dodgers',
    //   color: 'Blue',
    // }),
  };

  console.log(size);
  console.log(formData);

  redirect('/cart');
}
