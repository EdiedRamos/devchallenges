"use client";

import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { type RecipeContext, recipeContext } from "./recipeContext";
import {
  SortBy,
  type CategoriesT,
  type Category,
  type MealsPreviewT,
} from "../(models)";
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

  const [mealsPreview, setMealsPreview] = useState<MealsPreviewT>([]);
  const [mealsBackup, setMealsBackup] = useState<MealsPreviewT>([]);

  const [sortBy, setSortBy] = useState<SortBy>("name");

  const handleCurrentCategory = useCallback(
    (category: Category) => setCurrentCategory(category),
    []
  );

  const handleSortBy = useCallback(
    (criteria: SortBy) => setSortBy(criteria),
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

  useEffect(() => {
    if (!currentCategory) return;

    RecipeService.getMealsPreviewByCategory(currentCategory.strCategory).then(
      (result) => {
        setMealsBackup(result);
      }
    );
  }, [currentCategory]);

  useEffect(() => {
    let mealsFiltered = [...mealsBackup];
    console.log(sortBy);
    if (sortBy === "name") {
      mealsFiltered = mealsFiltered.sort((a, b) =>
        a.strMeal > b.strMeal ? 1 : -1
      );
    } else {
      mealsFiltered = mealsFiltered.sort((a, b) =>
        a.idMeal > b.idMeal ? 1 : -1
      );
    }

    setMealsPreview(mealsFiltered);
  }, [mealsBackup, sortBy]);

  const values: RecipeContext = {
    sortBy,
    categories,
    mealsPreview,
    currentCategory,
    handleCurrentCategory,
    handleSortBy,
  };

  return (
    <recipeContext.Provider value={values}>{children}</recipeContext.Provider>
  );
}
