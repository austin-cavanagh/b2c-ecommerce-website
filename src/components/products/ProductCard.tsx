import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProductType } from './ProductsGrid';

export function ProductCard({ product }: { product: ProductType }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust this value according to your needs
  });

  return (
    <Link
      href={`/products/${product.name.toLocaleLowerCase()}`}
      className="text-base font-semibold leading-6 text-gray-900"
      key={product.id}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Starts at 50 pixels down and invisible
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Ends at original position and fully visible
        transition={{ duration: 0.5, ease: 'easeOut' }} // Duration of 0.5 seconds with an 'easeOut' easing
        className="group relative transform cursor-pointer overflow-hidden rounded-lg shadow-xl"
      >
        <div
          key={product.id}
          className="group relative transform overflow-hidden rounded-lg shadow-xl transition duration-500 ease-in-out hover:scale-105"
        >
          <div className="aspect-h-1 aspect-w-1 w-full bg-gray-200 group-hover:opacity-75">
            <img
              src={product.imageUrls[0].src}
              alt={product.imageUrls[0].alt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
            <div className="p-6 text-center">
              <p className="text-xl font-bold text-white">{product.name}</p>
              <p className="mt-4 text-xl font-bold text-white">
                ${product.prices[0].price / 100}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
