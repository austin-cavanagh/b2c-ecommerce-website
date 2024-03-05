'use server';

import { prisma } from '@/prisma/prisma';
import 'server-only';

function capitalizeWords(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function getProduct(params: { product: string }) {
  const productName = capitalizeWords(decodeURIComponent(params.product));

  try {
    const productData = await prisma.product.findUnique({
      where: {
        name: productName,
      },
      include: {
        categories: true,
        prices: true,
        imageUrls: true,
      },
    });

    return productData;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}
