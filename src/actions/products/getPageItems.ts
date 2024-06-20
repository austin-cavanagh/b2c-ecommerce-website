'use server';
import { prisma } from '@/prisma/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import 'server-only';

export async function getPageItems(pageNumber: number, itemsPerPage: number) {
  const offset = (pageNumber - 1) * itemsPerPage;

  try {
    const products = await prisma.product.findMany({
      skip: offset,
      take: itemsPerPage,
      include: {
        imageUrls: true, // Assuming you have a relation for imageUrls
        prices: true, // Assuming you have a relation for prices
        // Add other relations as needed
      },
    });

    const totalProducts = await prisma.product.count();

    return {
      data: products,
      pageNumber: pageNumber,
      totalPages: Math.ceil(totalProducts / itemsPerPage),
      totalProducts: totalProducts,
    };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // Handle specific known errors
      console.error('Specific Prisma error:', error.message);
      throw new Error(`Database error: ${error.message}`);
    } else {
      // Handle generic errors
      console.error('getPageItems.ts: Unexpected error:', error);
      throw new Error('An unexpected error occurred');
    }
  }
}
