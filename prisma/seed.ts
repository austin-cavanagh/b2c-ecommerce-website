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

const products = [
  {
    id: 1,
    name: 'Teacher Pencil Sign',
    shortDescription: 'Short Description how long is',
    longDescription: `This cute pencil is a great way to show your appreciation to your child's teacher. Sign is made with maple plywood 1/8". The name is laser cut 1/8". The flowers are silk, off white.`,
    categories: ['Teacher', 'Signs', 'Kitchen'],
    craftingTime: 14,
    customizationOptions: [
      {
        id: 1,
        option:
          'Explanation of what can be changed and what should be specified in directions',
      },
    ],
    prices: [
      {
        id: 1,
        dimension: '12x12',
        price: 1000,
      },
      {
        id: 2,
        dimension: '15x15',
        price: 2000,
      },
      {
        id: 3,
        dimension: '20x20',
        price: 3000,
      },
    ],
    imageUrls: [
      {
        url: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-1.JPG',
        alt: 'Description',
      },
      {
        url: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-2.JPG',
        alt: 'Description',
      },
      {
        url: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/teacher-pencil-sign-3.JPG',
        alt: 'Description',
      },
    ],
  },
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
  await prisma.userAuths.deleteMany({});
  await prisma.verifyUserTokens.deleteMany({});
  await prisma.users.deleteMany({});
  console.log('Tables cleared');
}

async function addProducts() {
  for (const product of products) {
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
          create: product.customizationOptions.map(option => ({
            option: option.option,
          })),
        },
        prices: {
          create: product.prices,
        },
        imageUrls: {
          create: product.imageUrls.map(image => ({
            url: image.url,
            altText: image.alt,
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
