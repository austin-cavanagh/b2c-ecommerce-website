'use server';
import 'server-only';

export async function getPageItems(page: number, limit: number) {
  const offset = (page - 1) * limit;

  try {
    const products = await prisma.product.findMany({
      skip: offset,
      take: limit,
    });
    const totalProducts = await prisma.product.count();

    return {
      data: products,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
      totalProducts: totalProducts,
    };
  } catch (error) {
    console.error(
      'getPageItems.ts: Error getting page items from the database:',
      error,
    );
    throw new Error(error);
  }
}
