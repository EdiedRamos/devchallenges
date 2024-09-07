import { createContext } from "react";
import { CategoriesT, Category } from "../(models)";

export interface RecipeContext {
  categories: CategoriesT;
  currentCategory: Category | undefined;
  handleCurrentCategory: (category: Category) => void;
}

export const recipeContext = createContext<RecipeContext | undefined>(
  undefined
);
