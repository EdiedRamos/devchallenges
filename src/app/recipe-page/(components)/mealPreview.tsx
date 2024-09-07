import type { MealPreview } from "../(models)";

interface Props {
  mealPreview: MealPreview;
}

export function MealPreview({ mealPreview }: Props) {
  return (
    <div className="bg-rp-gray p-2 rounded-xl w-full max-w-[250px]">
      <img
        src={mealPreview.strMealThumb}
        alt=""
        className="w-full h-40 rounded-xl object-cover"
      />
      <p className="py-3 text-rp-light text-cs-14">{mealPreview.strMeal}</p>
    </div>
  );
}
