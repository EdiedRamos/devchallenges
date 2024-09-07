"use client";

import { Playfair_Display } from "next/font/google";

export const playfair_Display = Playfair_Display({
  subsets: ["latin"],
});

import { useRecipe } from "../(context)";
import { CategoryPreview } from "./categoryPreview";

export function Categories() {
  const { categories } = useRecipe();
  return (
    <section>
      <h4 className={`${playfair_Display.className} text-cs-24 font-medium`}>
        Categories
      </h4>
      <div className="flex flex-col gap-3 mt-8">
        {categories.map((category) => (
          <CategoryPreview key={category.idCategory} category={category} />
        ))}
      </div>
    </section>
  );
}
