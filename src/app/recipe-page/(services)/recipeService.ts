"use client";

import type {
  CategoriesT,
  CategoryResponse,
  MealPreviewResponse,
  MealsPreviewT,
} from "../(models)";

export const RecipeService = {
  async getAllCategories(): Promise<CategoriesT> {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = (await response.json()) as CategoryResponse;
      return data.categories;
    } catch {
      return [];
    }
  },

  async getMealsPreviewByCategory(category: string): Promise<MealsPreviewT> {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = (await response.json()) as MealPreviewResponse;
      return data.meals;
    } catch {
      return [];
    }
  },
};
