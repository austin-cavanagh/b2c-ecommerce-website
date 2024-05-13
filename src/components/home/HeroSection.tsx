'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const baseDelay = 0.3;
  const delayIncrement = 0.2;

  return (
    <section className="mt-72 text-center">
      <div className="mx-auto w-screen overflow-hidden p-12">
        <div className="absolute left-0 right-0 top-1/2 mx-auto w-full text-2xl font-bold text-white">
          <h2 className="whitespace-nowrap text-6xl font-semibold text-gray-900">
            Crafts by Jules
          </h2>
        </div>
        <div className="flex justify-center space-x-4">
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ delay: baseDelay, type: 'spring', stiffness: 50 }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
          <motion.div
            className="mt-32 flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + delayIncrement,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
          <motion.div
            className="mt-64 flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + 2 * delayIncrement,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
          <motion.div
            className="mt-96 flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + 3 * delayIncrement,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
          <motion.div
            className="mt-64 flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + 4 * delayIncrement,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
          <motion.div
            className="mt-32 flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + 5 * delayIncrement,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              delay: baseDelay + 6 * delayIncrement,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
            <div className="block h-80 w-56 rounded-3xl bg-indigo-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
