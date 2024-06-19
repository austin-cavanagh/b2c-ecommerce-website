'use server';

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!);

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

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Uncomment line of code below to perform action
async function main() {
  // await clearOrders();
  // await clearCartItems();
  // await clearProducts();
  // await clearUserData();
  // await addProducts();
  // await addCategories();
  // await clearCategories();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
