'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import familyImage from '../../data/categories-images/family-1.jpeg';
import sportsImage from '../../data/categories-images/sports-1.jpeg';
import romanticImage from '../../data/categories-images/romantic-1.jpeg';
import seasonsImage from '../../data/categories-images/seasons-1.jpeg';
import ornamentsImage from '../../data/categories-images/ornaments.jpeg';

const growthSize = 1.03; // Variable to determine the size of the growth on hover
const animationDuration = 0.3; // Variable to control the speed of the animation

export default function StarCategories() {
  return (
    <div className="my-40 flex items-center justify-center space-x-24">
      <h2 className="text-5xl font-semibold text-gray-900">Favorites</h2>
      <div className="flex items-center justify-center space-x-6">
        <div className="space-y-6">
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={sportsImage}
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={romanticImage}
              alt="Romantic"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="space-y-6">
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={familyImage}
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={seasonsImage}
              alt="Seasons"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={ornamentsImage}
              alt="Ornaments"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="space-y-6">
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={familyImage}
              alt="Family"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            className="relative h-52 w-52 cursor-pointer overflow-hidden rounded-[52px] shadow-xl"
            whileHover={{
              scale: growthSize,
              transition: { duration: animationDuration },
              boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            }}
          >
            <Image
              src={sportsImage}
              alt="Sports"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
