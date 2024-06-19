import { prisma } from '../prisma';

export async function clearProducts() {
  // Fetch all products that have a Stripe product ID
  const productsWithStripeId = await prisma.product.findMany({
    select: {
      id: true,
      stripeId: true,
    },
  });

  // Delete each corresponding Stripe product
  for (const product of productsWithStripeId) {
    try {
      // Fetch all prices associated with the stripe product
      const prices = await stripe.prices.list({
        product: product.stripeId,
      });

      // Delete each price
      for (const price of prices.data) {
        await stripe.prices.update(price.id, { active: false });
        console.log(`Deactivated Stripe price with ID: ${price.id}`);
      }

      // await stripe.products.del(product.stripeId);
      // console.log(`Deleted Stripe product with ID: ${product.stripeId}`);
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
