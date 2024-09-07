import { createContext } from "react";
import { CategoriesT, Category, MealsPreviewT, SortBy } from "../(models)";

export interface RecipeContext {
  categories: CategoriesT;
  mealsPreview: MealsPreviewT;
  sortBy: SortBy;
  searchBy: string;
  currentCategory: Category | undefined;
  handleCurrentCategory: (category: Category) => void;
  handleSortBy: (criteria: SortBy) => void;
  handleSearchBy: (criteria: string) => void;
}

export const recipeContext = createContext<RecipeContext | undefined>(
  undefined
);
