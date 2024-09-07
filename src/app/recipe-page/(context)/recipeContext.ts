import { createContext } from "react";
import { CategoriesT } from "../(models)";

export interface RecipeContext {
  categories: CategoriesT;
  currentCategory: string;
}

export const recipeContext = createContext<RecipeContext | undefined>(
  undefined
);
