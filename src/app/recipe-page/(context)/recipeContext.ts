import { createContext } from "react";
import { CategoriesT, Category, MealsPreviewT, SortBy } from "../(models)";

export interface RecipeContext {
  categories: CategoriesT;
  mealsPreview: MealsPreviewT;
  sortBy: SortBy;
  currentCategory: Category | undefined;
  handleCurrentCategory: (category: Category) => void;
  handleSortBy: (criteria: SortBy) => void;
}

export const recipeContext = createContext<RecipeContext | undefined>(
  undefined
);
