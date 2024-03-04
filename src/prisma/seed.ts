// npx prisma db seed
// npx ts-node src/prisma/seed.ts

'use server';

// import { productsData } from '@/app/data/products';
// import { PrismaClient } from '@prisma/client';

type OptionType = {
  option: string;
};

type ImageUrlType = {
  url: string;
  altText: string;
};

const productsData = require('../data/products');

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
  // await clearUserData();
  await addProducts();
  // await clearProducts();
  // await addCategories();
  // await clearCategories();
}

async function clearUserData() {
  await prisma.userAuth.deleteMany({});
  await prisma.verifyUserToken.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('Tables cleared');
}

async function addProducts() {
  for (const product of productsData) {
    // Find or create categories
    const categoryIds = [];
    for (const categoryName of product.categories) {
      const category =
        (await prisma.category.findUnique({
          where: { name: categoryName },
        })) ||
        (await prisma.category.create({
          data: { name: categoryName },
        }));
      categoryIds.push(category.id);
    }

    // Create the product without categories
    const createdProduct = await prisma.product.create({
      data: {
        name: product.name,
        shortDescription: product.shortDescription,
        longDescription: product.longDescription,
        craftingTime: product.craftingTime,
        // Assuming customizationOptions is an array of strings now
        customizationOptions: {
          create: product.customizationOptions.map((option: OptionType) => ({
            option: option.option,
          })),
        },
        prices: {
          create: product.prices,
        },
        imageUrls: {
          create: product.imageUrls.map((imageUrl: ImageUrlType) => ({
            url: imageUrl.url,
            altText: imageUrl.altText,
          })),
        },
      },
    });

    // Associate product with categories
    for (const categoryId of categoryIds) {
      await prisma.productCategory.create({
        data: {
          productId: createdProduct.id,
          categoryId: categoryId,
        },
      });
    }
  }
  console.log('Added products');
}

async function clearProducts() {
  // Delete related records first to maintain referential integrity
  await prisma.customizationOption.deleteMany({});
  await prisma.productPrice.deleteMany({});
  await prisma.imageUrl.deleteMany({});
  await prisma.productCategory.deleteMany({});

  // Now, it's safe to delete the products themselves
  const result = await prisma.product.deleteMany({});
  console.log(`Cleared ${result.count} products`);
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
