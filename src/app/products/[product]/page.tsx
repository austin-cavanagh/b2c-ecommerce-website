import getProduct, { ExtendedProduct } from '@/actions/getProduct';
import ProductOverview from '@/components/product-route/ProductOverview';

export default async function ProductRoute({
  params,
}: {
  params: { product: string };
}) {
  const productData = await getProduct(params);

  if (!productData) {
    return <div>Product not found</div>;
  }

  const product = productData;

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <ProductOverview product={product} />
    </main>
  );
}
