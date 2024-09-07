"use client";

import { useRecipe } from "../(context)";
import { CategoryPreview } from "./categoryPreview";

export function Categories() {
  const { categories } = useRecipe();
  return (
    <section>
      <h4>Categories</h4>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <CategoryPreview key={category.idCategory} category={category} />
        ))}
      </div>
    </section>
  );
}
