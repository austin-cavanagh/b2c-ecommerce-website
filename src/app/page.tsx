import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FavoritesSection from '@/components/home/FavoritesSection';

export default async function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center overflow-hidden">
      <HeroSection />
      <CategoriesSection />
      <FavoritesSection />
    </main>
  );
}
