"use client";

import { Playfair_Display } from "next/font/google";

export const playfair_Display = Playfair_Display({
  subsets: ["latin"],
});

import { useRecipe } from "../(context)";
import { CategoryPreview } from "./categoryPreview";

export function Categories() {
  const { categories, currentCategory, handleCurrentCategory } = useRecipe();
  return (
    <section className="w-full max-w-72">
      <h4
        className={`${playfair_Display.className} text-cs-24 font-medium text-rp-light`}
      >
        Categories
      </h4>
      <div className="flex flex-col gap-3 mt-8">
        {categories.map((category) => (
          <CategoryPreview
            onSelectCategory={handleCurrentCategory}
            key={category.idCategory}
            category={category}
            isActive={currentCategory?.idCategory === category.idCategory}
          />
        ))}
      </div>
    </section>
  );
}
