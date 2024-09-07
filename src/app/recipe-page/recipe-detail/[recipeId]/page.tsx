import Link from "next/link";
import { RecipeService } from "../../(services)/recipeService";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import type { Meal } from "../../(models)";

interface Props {
  params: { recipeId: string };
  searchParams: {};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Recipe ${params.recipeId}`,
  };
}

export default async function RecipeDetail(props: Props) {
  const recipe = await RecipeService.getMealById(props.params.recipeId);

  if (!recipe) redirect("/recipe-page");

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const ingredientKey = "strIngredient".concat(
      String(index + 1)
    ) as keyof Meal;
    const measureKey = "strMeasure".concat(String(index + 1)) as keyof Meal;
    return `${recipe[measureKey]} ${recipe[ingredientKey]}`;
  }).filter((recipe) => recipe.trim().length > 0);

  return (
    <div className="min-h-screen bg-rp-dark pb-10">
      <div className="px-2 md:px-0 max-w-[1136px] mx-auto">
        <header>
          <nav className="flex flex-wrap justify-between pt-8">
            <img src="/recipe-page/logo-light.svg" alt="" />
            <Link
              href={"/recipe-page"}
              className="flex flex-wrap items-center py-2 px-3 rounded-full border bg-rp-light gap-2"
            >
              <img src="/recipe-page/Expand_left.svg" alt="mierda" />
              <p className="text-rp-dark text-cs-14 font-medium">
                Back to categories
              </p>
            </Link>
          </nav>
        </header>
        <main className="flex justify-center mt-[52px]">
          <div className="w-full max-w-[616px]">
            <img
              src={recipe.strMealThumb}
              alt=""
              className="rounded-xl w-full h-96 object-cover"
            />

            <h1 className="text-cs-24 text-rp-light mt-8">{recipe.strMeal}</h1>

            {/* Category */}
            <div className="flex flex-wrap gap-3 mt-5">
              <p className="inline-block rounded-full bg-rp-gray py-2 px-6 text-cs-12 text-rp-light">
                category:{" "}
                <span className="font-bold">{recipe.strCategory}</span>
              </p>
              <p className="inline-block rounded-full bg-rp-gray py-2 px-6 text-cs-12 text-rp-light">
                area: <span className="font-bold">{recipe.strArea}</span>
              </p>
            </div>

            {/* Ingredients */}
            <article className="mt-10">
              <h3 className="text-rp-light font-bold mb-4 border-l-8 rounded-full border-rp-yellow pl-4">
                Ingredients
              </h3>
              <ul className="text-rp-light text-cs-14 list-disc pl-8">
                {ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </article>

            {/* Instructions */}
            <article className="mt-10">
              <h3 className="text-rp-light font-bold mb-4 border-l-8 rounded-full border-rp-blue pl-4">
                Instructions
              </h3>
              <p className="text-rp-light text-cs-14">
                {recipe.strInstructions}
              </p>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}
