import { Categories, Hero } from "./(components)";
import { RecipeProvider } from "./(context)/recipeProvider";

export default function RecipePage() {
  return (
    <div className="min-h-screen bg-rp-dark">
      <Hero />
      <RecipeProvider>
        <Categories />
      </RecipeProvider>
    </div>
  );
}
