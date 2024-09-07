import { Categories, Content, Hero } from "./(components)";
import { RecipeProvider } from "./(context)/recipeProvider";

export default function RecipePage() {
  return (
    <div className="min-h-screen bg-rp-dark">
      <Hero />
      <RecipeProvider>
        <div className="flex flex-wrap max-w-[1400px] mx-auto mt-8 gap-8">
          <Categories />
          <Content />
        </div>
      </RecipeProvider>
    </div>
  );
}
