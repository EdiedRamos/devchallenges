export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export type CategoriesT = Category[];

export interface MealPreview {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export type MealsPreviewT = MealPreview[];
