import type { Category, MealPreview } from "./recipe";

export interface CategoryResponse {
  categories: Category[];
}

export interface MealPreviewResponse {
  meals: MealPreview[];
}
