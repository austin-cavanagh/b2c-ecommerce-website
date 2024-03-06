'use server';
import 'server-only';

import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FormEvent } from 'react';
import { ExtendSession, authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/prisma/prisma';

export default async function addToCart(formData: FormData) {
  //   console.log('formData', formData);

  const session: ExtendSession | null = await getServerSession(authOptions);
  const cartId = session?.user?.cartId;
  if (!cartId) return;

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
    cartId: cartId,
    productId: Number(productId),
    price: Number(price),
    dimensions: size,
    customizations: JSON.stringify(customizationOptions),
  };

  try {
    const newCartItem = await prisma.cartItem.create({
      data: cartItem,
    });
    console.log('Added cart item:', newCartItem);

    // Optionally, redirect the user or handle the response as needed
    // redirect('/cart');
  } catch (error) {
    console.error('Error adding cart item:', error);
    // Handle the error, e.g., return an error message or redirect
  }

  // console.log('cartItem', cartItem);

  redirect('/cart');
}
