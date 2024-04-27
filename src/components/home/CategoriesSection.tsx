'use server';
import 'server-only';

import { categoryImages } from '@/data/categoryImages';

export default async function CategoriesSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categoryImages.map((category, index) => (
          <div key={index} className="group relative">
            <img
              src={category.src}
              alt={category.alt}
              className="h-auto w-full object-cover"
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
