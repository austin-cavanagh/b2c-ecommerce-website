'use client';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

import familyImage from '../../data/categories-images/family-1.jpeg';
import sportsImage from '../../data/categories-images/sports-1.jpeg';
import romanticImage from '../../data/categories-images/romantic-1.jpeg';
import seasonsImage from '../../data/categories-images/seasons-1.jpeg';
import ornamentsImage from '../../data/categories-images/ornaments.jpeg';
import HeroSectionCard from './HeroSectionCard';

export default function HeroSection() {
  const { scrollY } = useViewportScroll(); // This hook provides the current scroll distance in pixels

  // Transform for opacity of the title based on scroll position
  const titleOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  // Array of starting Y offsets for each column when the page loads
  const offsets = [0, 100, 200, 300, 200, 100, 0]; // Initial offsets for the animation
  const speedMultipliers = [1.5, 1.9, 2.3, 2.7, 2.3, 1.9, 1.5]; // Speed multipliers for each column
  // const images = [
  //   sportsImage,
  //   familyImage,
  //   romanticImage,
  //   seasonsImage,
  //   ornamentsImage,
  //   sportsImage,
  //   familyImage,
  // ]; // Array of images to display

  type ImageType = {
    name: string;
    link: string;
    src: string;
    alt: string;
  };

  const images: ImageType[] = [
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-kitty-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/hello-fall-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/mickey-orniment-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baseball-team-ornament-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/football-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/baby-name-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/barbie-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/grinch-christmas-ornament-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/mom-puzzle-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/named-ornament-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/newborn-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/stanley-cup-name-plate-1.jpg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/no-soliciting-sign-1.jpeg',
      alt: '',
    },
    {
      name: '',
      link: '',
      src: 'https://ecommerce-website-product-images.s3.us-west-1.amazonaws.com/be-mine-sign-1.jpeg',
      alt: '',
    },
  ];

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
              image={images[index * 2].src}
              nextImage={images[index * 2 + 1].src}
              alt={images[index * 2].alt}
              nextAlt={images[index * 2 + 1].alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
