import { createContext } from "react";
import { CategoriesT } from "../(models)";

export interface RecipeContext {
  categories: CategoriesT;
}

export const recipeContext = createContext<RecipeContext | undefined>(
  undefined
);
