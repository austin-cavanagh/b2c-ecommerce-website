'use client';

import { useTransform, useViewportScroll, motion } from 'framer-motion';

import sportsImage from '../../data/categories-images/sports-1.jpeg';
// import sportsImage from '../../data/categories-images/sports-2.jpeg';

import romanticImage from '../../data/categories-images/romantic-1.jpeg';
// import romanticImage from '../../data/categories-images/romantic-2.jpeg';

import familyImage from '../../data/categories-images/family-1.jpeg';

// import holidaysImage from '../../data/categories-images/holidays-1.jpeg';

import seasonsImage from '../../data/categories-images/seasons-1.jpeg';
// import seasonsImage from '../../data/categories-images/seasons-2.jpeg';

import ornamentsImage from '../../data/categories-images/ornaments.jpeg';
import Image from 'next/image';

export default function NewCategories() {
  const { scrollY } = useViewportScroll();

  // Define scroll points for the appearance of the section
  const startFadeIn = 300; // Start appearing at 300px scroll position
  const endFadeIn = 500; // Fully visible at 500px scroll position

  // Transform for opacity based on scroll position
  const opacity = useTransform(scrollY, [startFadeIn, endFadeIn], [0, 1]);

  return (
    <motion.div
      className="flex items-center justify-center space-x-24"
      style={{ opacity }}
    >
      <div className="flex items-start justify-center">
        <div className="flex flex-col items-end space-y-6">
          {/* <div className="mr-10 h-48 w-48 rounded-[60px] bg-indigo-800"></div> */}
          <div className="relative mr-10 h-48 w-48 overflow-hidden rounded-[60px]">
            <Image
              src={sportsImage}
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mr-8 h-40 w-40 rounded-[60px] bg-indigo-600"></div>
          <div className="mr-12 h-52 w-52 rounded-[60px] bg-indigo-300"></div>
        </div>
        <div className="space-y-6">
          <div className="ml-2 h-80 w-80 rounded-[60px] bg-indigo-400"></div>
          <div className="h-64 w-64 rounded-[60px] bg-indigo-600"></div>
        </div>
      </div>
      <h2 className="text-5xl font-semibold">Categories</h2>
    </motion.div>
  );
}
