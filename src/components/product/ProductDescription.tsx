import { ExtendedProduct } from '@/actions/getProduct';

type ProductDescriptionProps = {
  product: ExtendedProduct;
  price: any;
};

export default function ProductDescription({
  product,
  price,
}: ProductDescriptionProps) {
  return (
    <>
      {/* Name & Price */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          {product.name}
        </h1>
        <p className="text-3xl tracking-tight text-gray-900">${price}</p>
      </div>

      {/* Product Description */}
      <div className="mt-5">
        <h3 className="sr-only">Description</h3>
        <p className="space-y-6 text-base text-gray-700">
          {product.longDescription}
        </p>
      </div>
    </>
  );
}
