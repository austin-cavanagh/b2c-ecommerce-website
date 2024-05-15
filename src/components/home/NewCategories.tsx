'use client';

import { useTransform, useViewportScroll, motion } from 'framer-motion';

export default function NewCategories() {
  const { scrollY } = useViewportScroll();

  // Define scroll points for the appearance and disappearance of the section
  const startFadeIn = 300; // Start appearing at 200px scroll position
  const endFadeIn = 500; // Fully visible at 400px scroll position
  const startFadeOut = 800; // Start disappearing at 800px scroll position
  const endFadeOut = 1000; // Fully invisible at 1000px scroll position

  // Transform for opacity based on scroll position
  const opacity = useTransform(
    scrollY,
    [startFadeIn, endFadeIn, startFadeOut, endFadeOut],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      className="flex items-center justify-center space-x-24"
      style={{ opacity }}
    >
      <div className="flex items-start justify-center">
        <div className="flex flex-col items-end space-y-6">
          <div className="mr-10 h-48 w-48 rounded-[60px] bg-indigo-800"></div>
          <div className="mr-8 h-40 w-40 rounded-[60px] bg-indigo-600"></div>
          <div className="mr-12 h-52 w-52 rounded-[60px] bg-indigo-300"></div>
        </div>
        <div className="space-y-6">
          <div className="ml-2 h-80 w-80 rounded-[60px] bg-indigo-400"></div>
          <div className="h-64 w-64 rounded-[60px] bg-indigo-600"></div>
        </div>
      </div>
      <div className="text-5xl font-semibold">Categories</div>
    </motion.div>
  );
}
