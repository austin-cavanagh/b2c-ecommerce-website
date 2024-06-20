'use server';
import 'server-only';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ExtendSession } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/prisma/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function addToCart(formData: FormData) {
  const session: ExtendSession | null = await getServerSession(authOptions);
  const cartId = session?.user?.cartId;
  if (!cartId) return;

  const standardData = [
    'size[productId]',
    'size[price]',
    'size[dimension]',
    '$ACTION_ID_6119eab06d45b529606f64ba108a3caa62cc1dd4',
    'size[id]',
    'size[stripePriceId]',
  ];

  const productId = formData.get('size[productId]') as string;
  const dimensions = formData.get('size[dimension]') as string;

  // Format the customers chosen customizaion options
  const customizationOptions = [];
  const formObject = Object.fromEntries(formData);
  for (const [label, value] of Object.entries(formObject)) {
    if (!standardData.includes(label)) {
      customizationOptions.push({
        label: label as string,
        value: value as string,
      });
    }
  }

  // Retrieve the price and stripePriceId based on productId and dimension
  const productPrice = await prisma.productPrice.findFirst({
    where: {
      productId: Number(productId),
      dimension: dimensions,
    },
  });

  if (!productPrice) {
    // Handle case where price is not found
    console.error('Price not found for the given productId and dimension');
    return; // Make sure to handle this case in your application logic
  }

  const cartItem = {
    cartId: cartId,
    productId: Number(productId),
    price: productPrice.price,
    stripePriceId: productPrice.stripePriceId,
    dimensions: dimensions,
    customizations: customizationOptions,
  };

  try {
    await prisma.cartItem.create({
      data: cartItem,
    });

    // Optionally, redirect the user or handle the response as needed
    // redirect('/cart');
  } catch (error) {
    console.error('Error adding cart item:', error);
    // Handle the error, e.g., return an error message or redirect
  }

  redirect('/cart');
}
