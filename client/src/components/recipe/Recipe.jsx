import { useRecipes } from "../../api/recipeApi";
import RecipeCard from "./recipe-card/RecipeCard";
  
  export function Recipe() {
    const {recipes} = useRecipes();

    console.log(recipes);
    

    return (
      <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] ">
        {recipes.length > 0
        ? recipes.map((recipe , index) => <RecipeCard key={recipe._id} {...recipe} index={index} />)
        : <h3>No Recipes</h3>
        }
      </section>
    );
  }