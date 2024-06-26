'use server';

import { prisma } from '@/prisma/prisma';
import { ImageUrl, Product, ProductPrice } from '@prisma/client';
import 'server-only';

export type CustomizationOption = {
  label: string;
  description: string;
  inputType: 'dropdown' | 'textfield';
  choices?: string[];
  maxLength?: number;
};

export type ExtendedProduct = Product & {
  imageUrls: ImageUrl[];
  prices: ProductPrice[];
  customizationOptions: CustomizationOption[];
};

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

    if (productData && typeof productData.customizationOptions === 'object') {
      const extendedProduct: ExtendedProduct = {
        ...productData,
        customizationOptions: Array.isArray(productData.customizationOptions)
          ? (productData.customizationOptions as CustomizationOption[])
          : [],
      };
      return extendedProduct;
    } else {
      return {
        ...productData,
        customizationOptions: [],
      } as ExtendedProduct;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}
