import { useRecipes } from "../../api/recipeApi";
import RecipeCard from "./recipe-card/RecipeCard";
  
  export function Recipe() {
    const {recipes} = useRecipes();

    console.log(recipes);
    

    return (
      <section className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-4 m-5 ">
        {recipes.length > 0
        ? recipes.map((recipe , index) => <RecipeCard key={recipe._id} {...recipe} index={index} />)
        : <h3>No Recipes</h3>
        }
      </section>
    );
  }