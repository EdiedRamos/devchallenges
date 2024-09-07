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
  const [searchBy, setSearchBy] = useState<string>("");

  const handleCurrentCategory = useCallback(
    (category: Category) => setCurrentCategory(category),
    []
  );

  const handleSortBy = useCallback(
    (criteria: SortBy) => setSortBy(criteria),
    []
  );
  const handleSearchBy = useCallback(
    (criteria: string) => setSearchBy(criteria),
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

    if (sortBy === "name") {
      mealsFiltered = mealsFiltered.sort((a, b) =>
        a.strMeal > b.strMeal ? 1 : -1
      );
    } else {
      mealsFiltered = mealsFiltered.sort((a, b) =>
        a.idMeal > b.idMeal ? 1 : -1
      );
    }

    // TODO: Implement seach by instructions or area
    mealsFiltered = mealsFiltered.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchBy.toLowerCase())
    );

    setMealsPreview(mealsFiltered);
  }, [mealsBackup, sortBy, searchBy]);

  const values: RecipeContext = {
    sortBy,
    searchBy,
    categories,
    mealsPreview,
    currentCategory,
    handleCurrentCategory,
    handleSortBy,
    handleSearchBy,
  };

  return (
    <recipeContext.Provider value={values}>{children}</recipeContext.Provider>
  );
}
