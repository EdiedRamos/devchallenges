import Link from "next/link";
import type { MealPreview } from "../(models)";

interface Props {
  mealPreview: MealPreview;
}

export function MealPreview({ mealPreview }: Props) {
  return (
    <Link
      href={`recipe-page/recipe-detail/${mealPreview.idMeal}`}
      className="bg-rp-gray p-2 rounded-xl w-full max-w-[259px] hover:opacity-90"
    >
      <img
        src={mealPreview.strMealThumb}
        alt=""
        className="w-full h-44 rounded-xl object-cover"
      />
      <p className="py-3 text-rp-light text-cs-14">{mealPreview.strMeal}</p>
    </Link>
  );
}
