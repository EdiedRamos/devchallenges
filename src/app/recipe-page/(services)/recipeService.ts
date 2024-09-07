import type {
  CategoriesT,
  CategoryResponse,
  Meal,
  MealByIdResponse,
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

  async getMealById(mealId: string): Promise<Meal | null> {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = (await response.json()) as MealByIdResponse;
      if (data.meals.length === 0) return null;
      return data.meals[0];
    } catch {
      return null;
    }
  },
};
