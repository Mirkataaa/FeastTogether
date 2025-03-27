import { useParams } from "react-router";
import { useRecipe } from "../../api/recipeApi";
import { useState } from "react";

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const { recipe } = useRecipe(recipeId);
    const [servings, setServings] = useState(recipe?.servings || 1);

    function adjustIngredients(ingredient, servings, baseServings = 1) {
        if (!ingredient.amount || baseServings === 0) {
            return ` ${ingredient.unit} ${ingredient.name}`;
        }
        return `${(ingredient.amount * servings) / baseServings} ${ingredient.unit} ${ingredient.name}`;
    }


    
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-60 object-cover rounded-md" />
            <p className="text-gray-700 text-center mt-2 italic">{recipe.description}</p>
            <p className="text-sm text-gray-500 text-center">Category: {recipe.category} | Cooking Time: {recipe.cookingTime} mins</p>
            
     

            <div className="mt-6 notebook p-6 border-l-4 border-r-4 border-brown-600 bg-amber-100 shadow-md rounded-md relative">
                <h2 className="text-2xl font-semibold">Ingredients</h2>
                <p className="text-gray-600 mb-2">For {servings} servings</p>
                <div className="flex gap-2 mb-4">
                    <button onClick={() => setServings(servings + 1)} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
                    <button onClick={() => setServings(servings > 1 ? servings - 1 : 1)} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
                </div>
                <ul className="list-none">
                    {recipe.ingredients && recipe.ingredients.length > 0 ? (
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="border-b border-dashed border-brown-600 py-1">
                                {adjustIngredients(ingredient, servings, recipe.servings)}
                            </li>
                        ))
                    ) : (
                        <li>No ingredients found</li>
                    )}
                </ul>
            </div>

            <div className="mt-6 notebook p-6 border-l-4 border-r-4 border-brown-600 bg-amber-100 shadow-md rounded-md relative">
                <h2 className="text-2xl font-semibold">Instructions</h2>
                <p className="text-gray-700 mt-2">{recipe.instructions}</p>
            </div>

           
        </div>
    );
}
