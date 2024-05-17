import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function ProductCard({
  product,
  index,
}: {
  product: any;
  index: number;
}) {
  const numberOfColumns = 3;
  const row = Math.floor(index / numberOfColumns);
  const column = index % numberOfColumns;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01, // Adjust this value according to your needs
  });

  // Each row starts 0.3s later, each column within a row adds 0.1s
  const delay = row * 0.3 + column * 0.1;

  return (
    <Link
      href={`/products/${product.name.toLowerCase()}`}
      className="text-base font-semibold leading-6 text-gray-900"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }} // Starts at 50 pixels down and invisible
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Ends at original position and fully visible
        transition={{
          duration: 0.4,
          ease: 'easeOut',
          delay: 0,
          // delay: row === (0 || 1) ? 0 : delay, // Staggered delay based on row and column
        }}
        whileHover={{ scale: 1.05 }} // Grow in size on hover
        className="group relative transform cursor-pointer overflow-hidden rounded-[50px] shadow-xl hover:shadow-2xl"
      >
        <div className="aspect-h-1 aspect-w-1 w-full bg-gray-200">
          <Image
            src={product.imageUrls[0].src}
            alt={product.imageUrls[0].alt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            fill
            // layout="fill" // Make the image take up the whole container
            // objectFit="cover" // Maintains the aspect ratio
          />
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
          <div className="p-6 text-center">
            <p className="text-xl font-semibold text-white">{product.name}</p>
            <p className="mt-4 text-xl font-bold text-white">
              ${product.prices[0].price / 100}
            </p>
          </div>
        </div> */}
      </motion.div>
    </Link>
  );
}
