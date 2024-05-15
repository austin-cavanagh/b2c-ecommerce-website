'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useViewportScroll(); // This hook provides the current scroll distance in pixels

  // Function to calculate dynamic Y offsets based on scroll distance and speed multiplier
  const calculateOffset = (baseOffset: number, speedMultiplier: number) => {
    // Adjusting initial and final y positions based on scroll distance and speed multiplier
    return useTransform(
      scrollY,
      [0, 500],
      [baseOffset, baseOffset - 500 * speedMultiplier],
    );
  };

  // Transform for opacity of the title based on scroll position
  const titleOpacity = useTransform(scrollY, [0, 70], [1, 0]);

  // Array of starting Y offsets for each column when the page loads
  const offsets = [0, 100, 200, 300, 200, 100, 0]; // Initial offsets for the animation
  const speedMultipliers = [1.5, 1.9, 2.3, 2.7, 2.3, 1.9, 1.5]; // Speed multipliers for each column

  return (
    <section className="translate-y-96 text-center">
      <motion.h1
        className="absolute -top-10 left-1/2  -translate-x-1/2 transform text-6xl font-semibold text-gray-900"
        style={{ opacity: titleOpacity }}
      >
        Crafts by Jules
      </motion.h1>

      <div className="relative mx-auto w-screen pt-0">
        <div className="flex justify-center space-x-4">
          {offsets.map((offset, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-4"
              style={{ y: calculateOffset(offset, speedMultipliers[index]) }}
            >
              <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
              <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
