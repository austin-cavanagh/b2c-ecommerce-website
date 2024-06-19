'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

import HeroSectionCard from './HeroSectionCard';
import { heroSectionImages } from '@/data/heroSectionImages';

export default function HeroSection() {
  const { scrollY } = useViewportScroll(); // This hook provides the current scroll distance in pixels

  // Transform for opacity of the title based on scroll position
  const titleOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  // Array of starting Y offsets for each column when the page loads
  const offsets = [0, 100, 200, 300, 200, 100, 0]; // Initial offsets for the animation
  const speedMultipliers = [1.5, 1.9, 2.3, 2.7, 2.3, 1.9, 1.5]; // Speed multipliers for each column

  return (
    <section className="translate-y-96 text-center">
      <motion.h1
        className="absolute -top-14 left-1/2  -translate-x-1/2 transform text-6xl font-semibold text-gray-900"
        style={{ opacity: titleOpacity }}
      >
        Crafts by Jules
      </motion.h1>

      <div className="relative mx-auto w-screen pt-0">
        <div className="flex justify-center space-x-5">
          {offsets.map((offset, index) => (
            <HeroSectionCard
              key={index}
              baseOffset={offset}
              speedMultiplier={speedMultipliers[index]}
              image={heroSectionImages[index * 2].src}
              nextImage={heroSectionImages[index * 2 + 1].src}
              alt={heroSectionImages[index * 2].alt}
              nextAlt={heroSectionImages[index * 2 + 1].alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
