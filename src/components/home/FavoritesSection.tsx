'use client';

import {
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
} from '@/data/favoritesSectionImages';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Define how the hover animation reacts to the cursor hovering over it
const growthSize = 1.03;
const animationDuration = 0.3;
const boxShadow = '0 25px 50px -12px rgb(0 0 0 / 0.25)';
const whileHoverObject = {
  scale: growthSize,
  transition: { duration: animationDuration },
  boxShadow: boxShadow,
};

export default function FavoritesSection() {
  return (
    <div className="my-40 flex items-center justify-center space-x-24">
      <h2 className="text-5xl font-semibold text-gray-900">Favorites</h2>
      <div className="flex items-center justify-center space-x-6">
        {/* First Column */}
        <div className="space-y-6">
          {firstColumnImages.map((image, index) => {
            return (
              <motion.div
                className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[50px] shadow-xl"
                whileHover={whileHoverObject}
                key={index}
              >
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Second Column */}
        <div className="space-y-6">
          {secondColumnImages.map((image, index) => {
            return (
              <motion.div
                className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[50px] shadow-xl"
                whileHover={whileHoverObject}
                key={index}
              >
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Third Column */}
        <div className="space-y-6">
          {thirdColumnImages.map((image, index) => {
            return (
              <motion.div
                className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[50px] shadow-xl"
                whileHover={whileHoverObject}
                key={index}
              >
                <Link href={image.link}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
