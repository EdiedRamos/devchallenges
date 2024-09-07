import { useContext } from "react";
import { recipeContext } from "./recipeContext";

export function useRecipe() {
  const context = useContext(recipeContext);
  if (!context) throw new Error("useRecipe must to be inside recipe context");
  return context;
}
