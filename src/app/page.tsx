// 'use client';

import { getServerSession } from 'next-auth';
import HeroSection from '@/components/home/HeroSection';
import Categories from '@/components/home/Categories';
import Favorites from '@/components/home/Favorites';

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center overflow-hidden">
      <HeroSection />

      <Categories />

      <Favorites />
    </main>
  );
}
