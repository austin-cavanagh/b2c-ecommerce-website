'use server';

export async function getProductsAction() {
  // Fetch products from the database
  const products = await prisma.product.findMany({
    include: {
      imageUrls: true, // Assuming you have a relation for imageUrls
      prices: true, // Assuming you have a relation for prices
      // Add other relations as needed
    },
  });

  return products;
}
