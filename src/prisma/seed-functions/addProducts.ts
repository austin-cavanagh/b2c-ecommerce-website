import { prisma } from '../prisma';

type PriceCreationResult = {
  dimension: string;
  price: number;
  stripePriceId: string;
};

type PriceInfo = {
  dimension: string;
  price: number;
};

type ImageUrlType = {
  src: string;
  alt: string;
};

export async function addProducts() {
  try {
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
            unit_amount: priceInfo.price,
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
              src: imageUrl.src,
              alt: imageUrl.alt,
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
  } catch (error) {
    console.error('Error adding products:', error);
  }
}
