'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useViewportScroll(); // This hook provides the current scroll distance in pixels

  // Function to calculate dynamic Y offsets based on scroll distance
  const calculateOffset = baseOffset => {
    // Adjusting initial and final y positions based on scroll distance
    return useTransform(scrollY, [0, 500], [baseOffset, 0]); // Adjust 500 to the scroll distance that completes the animation
  };

  // Array of starting Y offsets for each column when the page loads
  const offsets = [0, 100, 200, 300, 200, 100, 0]; // Initial offsets for the animation

  return (
    <section className="mb-40 mt-60 text-center">
      {/* Remember to remove the mb here */}
      <div className="mx-auto w-screen p-12">
        <div className="flex justify-center space-x-4">
          {offsets.map((offset, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-4"
              style={{ y: calculateOffset(offset) }}
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
