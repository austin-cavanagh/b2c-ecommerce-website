'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const growthSize = 1.03;
const animationDuration = 0.3;
const boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';

export default function StarCategories() {
  return (
    <div className="my-40 flex items-center justify-center space-x-24">
      <h2 className="text-5xl font-semibold text-gray-900">Favorites</h2>
      <div className="flex items-center justify-center space-x-6">
        <div className="space-y-6">
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baby-name-sign-1.jpeg"
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/football-sign-1.jpeg"
              alt="Romantic"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="space-y-6">
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-kitty-sign-1.jpeg"
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/mom-puzzle-sign-1.jpeg"
              alt="Seasons"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/named-ornament-1.jpeg"
              alt="Ornaments"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="space-y-6">
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/barbie-sign-1.jpeg"
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: boxShadow,
            }}
          >
            <Image
              src="https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/no-soliciting-sign-1.jpeg"
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
