"use client";

import { CategoriesT, CategoryResponse } from "../(models)";

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
};
