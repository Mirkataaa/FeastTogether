import Recipe from "../models/Recipes.js";

const getAllRecipes = async () => {
    try {
        const recipes = await Recipe.find();
        return recipes;      
    } catch (error) {
        throw new Error('Error fetching recipes' + error.message);
    }
};

const getRecipeById = async (id) => {

    const recipe = await Recipe.findById (id)
    .populate('category')
    .populate('author')
    .populate('ratings')
    .populate('comments')
    .lean();

    if(!recipe) {
        throw new Error('Recipe not found!');
    }

    try {
        // ! Cut the _id from ingredients .. //TODO check why is happening .. Problem with mongoose ?
        recipe.ingredients = recipe.ingredients.map(({ _id, ...rest }) => rest);

        return recipe; 
    } catch (error) {
        throw new Error('Error fetching product: ' + error.message);
    }
};

const createRecipe = async (recipeData) => {
    try {
        // TODO: Check cases and write logic if needed
        const recipe = new Recipe(recipeData);
        await recipe.save();
        return recipe;   
    } catch (error) {
        throw new Error('Error creating recipe: ' + error.message);
    }
};

const updateRecipe = async (id , recipeData) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(id , recipeData , {new: true});
        if(!recipe) {
            throw new Error('Recipe not found!');
        }
        return recipe;
    } catch (error) {
        throw new Error('Error updating recipe: ' + error.message);
    }
}

const deleteRecipe = async (id) => {
    try {
        const recipe = Recipe.findByIdAndDelete(id);
        if(!recipe) {
            throw new Error('Recipe not found!');
        };
        return recipe;
    } catch (error) {
        throw new Error('Error deleting product:' + error.message);
    }
}

const getLatestRecipes = async () => {
    try {
        const recipes = await Recipe.find().sort({_id: -1}).limit(4);
        return recipes;
    } catch (error) {
        throw new Error('Error fetching latest recipes' + error.message);
    }
}

export default {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getLatestRecipes
}

