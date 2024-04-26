'use client';

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { firstRow, secondRow, thirdRow } from '@/data/heroParallaxImages';
import { useRef } from 'react';

export default function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 0]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex flex-col self-auto overflow-hidden py-10 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-10 flex flex-row-reverse space-x-10 space-x-reverse">
          {firstRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div>

        <motion.div className="mb-10 flex  flex-row space-x-10 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>

        {/* <motion.div className="flex flex-row-reverse space-x-10 space-x-reverse">
          {thirdRow.map((product, index) => (
            <ProductCard product={product} translate={translateX} key={index} />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
}

export const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4 py-20 md:py-40">
      <h1
        className={`text-2xl font-bold md:text-7xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        The Ultimate <br /> development studio
      </h1>
      <p
        className={`mt-8 max-w-2xl text-base md:text-xl ${theme === 'dark' ? 'text-neutral-200' : 'text-black'}`}
      >
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export type ProductCardProps = {
  product: {
    name: string;
    price: number;
    link: string;
    src: string;
  };
  translate: MotionValue<number>;
};

export const ProductCard = ({ product, translate }: ProductCardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.name}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.src}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={product.name}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-50"></div>
      <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white opacity-0 group-hover/product:opacity-100">
        {product.name}
      </h2>
      <div className="absolute bottom-4 right-4  text-xl font-bold text-white opacity-0 group-hover/product:opacity-100">
        ${product.price / 100}
      </div>
    </motion.div>
  );
};
