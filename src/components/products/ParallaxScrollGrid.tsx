'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/functions/cn';

export type ImageObject = {
  src: string;
  alt: string;
};

export function ParallaxScrollGrid({
  images,
  className,
}: {
  images: ImageObject[];
  className?: string;
}) {
  //   const gridRef = useRef<any>(null);
  //   const { scrollYProgress } = useScroll({
  //     container: gridRef, // remove this if your container is not fixed height
  //     offset: ['start start', 'end start'], // remove this if your container is not fixed height
  //   });

  console.log('IMAGES:', images);

  const { scrollYProgress } = useScroll(); // Using global scroll context

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Calculate images per row
  const baseCount = Math.floor(images.length / 3);
  const extra = images.length % 3;

  // Determine the number of images in each row
  const firstPartCount = baseCount + (extra > 0 ? 1 : 0);
  const secondPartCount = baseCount;
  const thirdPartCount = baseCount + (extra > 1 ? 1 : 0);

  const firstPart = images.slice(0, firstPartCount);
  const secondPart = images.slice(
    firstPartCount,
    firstPartCount + secondPartCount,
  );
  const thirdPart = images.slice(firstPartCount + secondPartCount);

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-10 pt-24 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-10">
          {firstPart.map((image, idx) => (
            <motion.div style={{ y: translateFirst }} key={idx}>
              <Image
                src={image.src}
                height="400"
                width="400"
                alt={image.alt}
                className="rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="space-y-10">
          {secondPart.map((image, idx) => (
            <motion.div style={{ y: translateSecond }} key={idx}>
              <Image
                src={image.src}
                height="400"
                width="400"
                alt={image.alt}
                className="rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((image, idx) => (
            <motion.div style={{ y: translateThird }} key={idx}>
              <Image
                src={image.src}
                height="400"
                width="400"
                alt={image.alt}
                className="rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
