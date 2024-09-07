import { createContext } from "react";
import { CategoriesT, Category, MealsPreviewT } from "../(models)";

export interface RecipeContext {
  categories: CategoriesT;
  mealsPreview: MealsPreviewT;
  currentCategory: Category | undefined;
  handleCurrentCategory: (category: Category) => void;
}

export const recipeContext = createContext<RecipeContext | undefined>(
  undefined
);
