import { prisma } from '../prisma';

export async function clearCartItems() {
  const result = await prisma.cartItem.deleteMany({});
  console.log(`CLEARED ${result.count} CART ITEMS`);
}
