'use server';

import { prisma } from '@/prisma/prisma';
import { ImageUrl, Prisma, Product, ProductPrice } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import 'server-only';

export type CustomizationOption = {
  option: string;
  description: string;
  inputType: 'dropdown' | 'textfield';
  choices?: string[];
  maxLength?: number;
};

export type ExtendedProduct = Product & {
  imageUrls: ImageUrl[];
  prices: ProductPrice[];
  customizationOptions: CustomizationOption[] | null;
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

    if (!productData) {
      return null;
    }

    // Assuming customizationOptions is a JSON string, parse it
    // If productData.customizationOptions is not a string, adjust accordingly
    // const customizationOptions: CustomizationOption[] | null =
    //   productData.customizationOptions
    //     ? JSON.parse(productData.customizationOptions as string)
    //     : null;

    const customizationOptions =
      productData.customizationOptions as CustomizationOption[];

    // Construct the extended product object with parsed customization options
    const extendedProduct: ExtendedProduct = {
      ...productData,
      customizationOptions, // Add parsed customization options to the product object
    };

    return productData;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}
