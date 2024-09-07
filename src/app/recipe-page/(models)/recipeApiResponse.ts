import type { Category, Meal, MealPreview } from "./recipe";

export interface CategoryResponse {
  categories: Category[];
}

export interface MealPreviewResponse {
  meals: MealPreview[];
}

export interface MealByIdResponse {
  meals: Meal[];
}
