'use client';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/functions/cn';

export function ParallaxScrollGrid({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  //   const gridRef = useRef<any>(null);
  //   const { scrollYProgress } = useScroll({
  //     container: gridRef, // remove this if your container is not fixed height
  //     offset: ['start start', 'end start'], // remove this if your container is not fixed height
  //   });

  const { scrollYProgress } = useScroll(); // Using global scroll context

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-10 py-40 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-10">
          {firstPart.map((src, idx) => (
            <motion.div style={{ y: translateFirst }} key={idx}>
              <Image
                src={src}
                height="400"
                width="400"
                alt="Image"
                className="rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((src, idx) => (
            <motion.div style={{ y: translateSecond }} key={idx}>
              <Image
                src={src}
                height="400"
                width="400"
                alt="Image"
                className="rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((src, idx) => (
            <motion.div style={{ y: translateThird }} key={idx}>
              <Image
                src={src}
                height="400"
                width="400"
                alt="Image"
                className="rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
