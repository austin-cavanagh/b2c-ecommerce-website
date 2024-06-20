import { ExtendedProduct } from '@/actions/getProduct';

type CustomizationsSectionProps = {
  product: ExtendedProduct;
};

export default function CustomizationsSection({
  product,
}: CustomizationsSectionProps) {
  return (
    <div className="mt-6 flex flex-col space-y-4">
      {product.customizationOptions &&
        product.customizationOptions.map((option, index) => {
          return (
            <div key={index}>
              <label
                htmlFor={option.label}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {option.label}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name={option.label}
                  id={option.label}
                  className="block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  placeholder={option.description}
                  aria-describedby={`${option.label}-description`}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
