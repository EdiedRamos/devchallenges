"use client";

import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { type RecipeContext, recipeContext } from "./recipeContext";
import type { CategoriesT, Category } from "../(models)";
import { RecipeService } from "../(services)/recipeService";

function findCategoryId(
  categories: CategoriesT,
  categoryName: string
): Category | null {
  const category = categories.find((category) =>
    category.strCategory.toLowerCase().includes(categoryName.toLowerCase())
  );
  return category ? category : null;
}

export function RecipeProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<CategoriesT>([]);
  const [currentCategory, setCurrentCategory] = useState<Category>();

  const handleCurrentCategory = useCallback(
    (category: Category) => setCurrentCategory(category),
    []
  );

  useEffect(() => {
    RecipeService.getAllCategories().then((result) => {
      if (result.length === 0) return;

      setCategories(result);
      const dessertCategoryId = findCategoryId(result, "dessert");
      setCurrentCategory(dessertCategoryId ?? result[0]);
    });
  }, []);

  const values: RecipeContext = {
    categories,
    currentCategory,
    handleCurrentCategory,
  };

  return (
    <recipeContext.Provider value={values}>{children}</recipeContext.Provider>
  );
}
