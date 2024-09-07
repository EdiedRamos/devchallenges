"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import { type RecipeContext, recipeContext } from "./recipeContext";
import { CategoriesT } from "../(models)";
import { RecipeService } from "../(services)/recipeService";

function findCategoryId(
  categories: CategoriesT,
  categoryName: string
): string | null {
  const category = categories.find((category) =>
    category.strCategory.toLowerCase().includes(categoryName.toLowerCase())
  );
  return category ? category.idCategory : null;
}

export function RecipeProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<CategoriesT>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  useEffect(() => {
    RecipeService.getAllCategories().then((result) => {
      if (result.length === 0) return;

      setCategories(result);
      const dessertCategoryId = findCategoryId(result, "dessert");
      setCurrentCategory(dessertCategoryId ?? result[0].idCategory);
    });
  }, []);

  const values: RecipeContext = { categories, currentCategory };

  return (
    <recipeContext.Provider value={values}>{children}</recipeContext.Provider>
  );
}
