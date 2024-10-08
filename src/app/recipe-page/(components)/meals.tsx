"use client";

import { useRecipe } from "../(context)";
import { MealPreview } from "./mealPreview";

export function Meals() {
  const { mealsPreview } = useRecipe();
  return (
    <div className="mt-10 flex flex-wrap gap-8">
      {mealsPreview.length > 0 ? (
        mealsPreview.map((mealPreview) => (
          <MealPreview key={mealPreview.idMeal} mealPreview={mealPreview} />
        ))
      ) : (
        <p className="text-rp-light">Not found 😟</p>
      )}
    </div>
  );
}
