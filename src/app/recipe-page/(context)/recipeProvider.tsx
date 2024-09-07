"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import { type RecipeContext, recipeContext } from "./recipeContext";
import { CategoriesT } from "../(models)";
import { RecipeService } from "../(services)/recipeService";

export function RecipeProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<CategoriesT>([]);

  useEffect(() => {
    RecipeService.getAllCategories().then((result) => setCategories(result));
  }, []);

  const values: RecipeContext = { categories };

  return (
    <recipeContext.Provider value={values}>{children}</recipeContext.Provider>
  );
}
