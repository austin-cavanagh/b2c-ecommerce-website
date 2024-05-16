'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

type HeroSectionCardProps = {
  baseOffset: number;
  speedMultiplier: number;
  image: StaticImageData;
  nextImage: StaticImageData;
};

export default function HeroSectionCard({
  baseOffset,
  speedMultiplier,
  image,
  nextImage,
}: HeroSectionCardProps) {
  const { scrollY } = useViewportScroll();
  const y = useTransform(
    scrollY,
    [0, 500],
    [baseOffset, baseOffset - 500 * speedMultiplier],
  );

  return (
    <motion.div className="flex flex-col space-y-4" style={{ y }}>
      <div className="relative h-80 w-56 overflow-hidden rounded-3xl shadow-xl">
        <Image src={image} alt="Image" layout="fill" objectFit="cover" />
      </div>
      <div className="relative h-80 w-56 overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={nextImage}
          alt="Next Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </motion.div>
  );
}
