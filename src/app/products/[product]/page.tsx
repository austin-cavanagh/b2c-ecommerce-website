import { getProduct } from '@/actions/getProduct';
import ProductOverview from '@/components/product-route/ProductOverview';
import { Product } from '@prisma/client';

export default async function ProductRoute({
  params,
}: {
  params: { product: string };
}) {
  const product: Product = await getProduct(params);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <ProductOverview product={product} />
    </main>
  );
}
