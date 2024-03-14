// npx prisma db seed

'use server';
// require('server-only');

// import { productsData } from '@/app/data/products';
// import { PrismaClient } from '@prisma/client';

// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!);

type OptionType = {
  option: string;
};

type ImageUrlType = {
  imageSrc: string;
  imageAlt: string;
};

type PriceCreationResult = {
  dimension: string;
  price: number;
  stripePriceId: string;
};

type PriceInfo = {
  dimension: string;
  price: number;
};

const data = require('../data/products');
const productsData = data.products;

// console.log(productsData);

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
  // await clearCartItems();
  // await clearProducts();
  // await clearUserData();
  await addProducts();
  // await addCategories();
  // await clearCategories();
}

async function clearUserData() {
  await prisma.cart.deleteMany({});
  await prisma.userAuth.deleteMany({});
  await prisma.verifyUserToken.deleteMany({});
  await prisma.user.deleteMany({});
  console.log('USER DATA CLEARED');
}

async function addProducts() {
  // console.log(productsData);
  for (const product of productsData) {
    // Find or create categories
    const categoryIds = [];

    // Create categories for products
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

    // Create stripe product to get product id
    const stripeProduct = await stripe.products.create({
      name: product.name,
      description: product.shortDescription,
      images: [product.imageUrls[0].imageSrc],
    });

    // Initialize an array to hold price creation promises
    let priceCreatePromises: Promise<PriceCreationResult>[] = [];

    // Create a price id for each dimension we are offering for the product
    // Assuming product.prices is an array where each item has dimension and price properties
    product.prices.forEach((priceInfo: PriceInfo) => {
      // Create a Stripe price for each product variant
      const priceCreatePromise = stripe.prices
        .create({
          product: stripeProduct.id,
          unit_amount: priceInfo.price * 100, // Convert price to cents
          currency: 'usd',
        })
        .then((stripePrice: { id: string }) => {
          // Return an object containing the necessary price information
          // Including the Stripe price ID and product dimension
          return {
            dimension: priceInfo.dimension,
            price: priceInfo.price,
            stripePriceId: stripePrice.id,
          };
        });

      priceCreatePromises.push(priceCreatePromise);
    });

    // Wait for all Stripe prices to be created
    const pricesWithStripeIds = await Promise.all(priceCreatePromises);

    // Create products
    const createdProduct = await prisma.product.create({
      data: {
        name: product.name,
        shortDescription: product.shortDescription,
        longDescription: product.longDescription,
        craftingTime: product.craftingTime,
        customizationOptions: product.customizationOptions,
        stripeId: stripeProduct.id,
        prices: {
          create: pricesWithStripeIds.map(price => ({
            dimension: price.dimension,
            price: price.price,
            stripePriceId: price.stripePriceId,
          })),
        },
        imageUrls: {
          create: product.imageUrls.map((imageUrl: ImageUrlType) => ({
            imageSrc: imageUrl.imageSrc,
            imageAlt: imageUrl.imageAlt,
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
  // Fetch all products that have a Stripe product ID
  const productsWithStripeId = await prisma.product.findMany({
    where: {
      stripeId: {
        not: null,
      },
    },
    select: {
      id: true,
      stripeId: true,
    },
  });

  // Delete each corresponding Stripe product
  for (const product of productsWithStripeId) {
    try {
      await stripe.products.del(product.stripeId);
      console.log(`Deleted Stripe product with ID: ${product.stripeId}`);
    } catch (error) {
      console.error(
        `Error deleting Stripe product with ID: ${product.stripeId}`,
        error,
      );
    }
  }

  // Delete related records first to maintain referential integrity
  // await prisma.customizationOption.deleteMany({});
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

async function clearCartItems() {
  const result = await prisma.cartItem.deleteMany({});
  console.log(`CLEARED ${result.count} CART ITEMS`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
