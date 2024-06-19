import { prisma } from '../prisma';

export async function clearCategories() {
  await prisma.category.deleteMany({});
  console.log('Cleared all categories');
}
