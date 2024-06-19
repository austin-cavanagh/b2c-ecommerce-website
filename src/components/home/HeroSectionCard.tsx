'use client';

import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

type HeroSectionCardProps = {
  baseOffset: number;
  speedMultiplier: number;
  image: string;
  nextImage: string;
  alt: string;
  nextAlt: string;
};

export default function HeroSectionCard({
  baseOffset,
  speedMultiplier,
  image,
  nextImage,
  alt,
  nextAlt,
}: HeroSectionCardProps) {
  const { scrollY } = useViewportScroll();
  const y = useTransform(
    scrollY,
    [0, 500],
    [baseOffset, baseOffset - 500 * speedMultiplier],
  );

  return (
    <motion.div className="flex flex-col space-y-5" style={{ y }}>
      <div className="relative h-80 w-56 overflow-hidden rounded-[50px] shadow-xl">
        <Image src={image} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-80 w-56 overflow-hidden rounded-[50px] shadow-xl">
        <Image src={nextImage} alt={nextAlt} layout="fill" objectFit="cover" />
      </div>
    </motion.div>
  );
}
