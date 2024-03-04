// npx prisma db seed

'use server';

const categories = [
  { name: 'Teacher' },
  { name: 'Signs' },
  { name: 'Kitchen' },
  { name: 'Gifts' },
  { name: 'Romantic' },
  { name: 'Family' },
];

// const { categories } = require('@/app/data/categories');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // await clearDatabase();

  // await addProducts();
  // await clearProducts();

  await addCategories();
  // await clearCategories();
}

async function clearDatabase() {
  await prisma.userAuths.deleteMany({});
  await prisma.verifyUserTokens.deleteMany({});
  await prisma.users.deleteMany({});
  console.log('Tables cleared');
}

async function addProducts() {
  return;
}

async function clearProducts() {
  return;
}

async function addCategories() {
  const categoriesResult = await prisma.category.createMany({
    data: categories,
  });
  console.log('Added categories:', categoriesResult);
}

async function clearCategories() {
  await prisma.category.deleteMany({});
  console.log('Cleared all categories');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
