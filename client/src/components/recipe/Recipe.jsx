import { useRecipes } from "../../api/recipeApi";
import RecipeCard from "./recipe-card/RecipeCard";
  
  export function Recipe() {
    const {recipes} = useRecipes();

    

    return (
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)
      ) : (
        <h3 className="text-center text-gray-600 col-span-full">No Recipes</h3>
      )}
    </section>
    );
  }