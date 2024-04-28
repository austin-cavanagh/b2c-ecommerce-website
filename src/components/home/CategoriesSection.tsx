import { categoryImages } from '@/data/categoryImages';
import Image from 'next/image';

export default async function CategoriesSection() {
  return (
    <section className="mx-auto max-w-5xl p-10">
      <h2 className="mb-4 text-5xl font-bold">Categories</h2>
      <div className="grid grid-cols-2 gap-10">
        {categoryImages.map((category, index) => (
          <div key={index} className="group relative">
            <Image
              src={category.src}
              alt={category.alt}
              layout="responsive"
              width={300} // Equal width and height for a square aspect ratio
              height={300} // Ensure these are equal for square images
              className="rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xl font-semibold text-white">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
