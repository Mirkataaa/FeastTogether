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
    try {
        const recipe = await Recipe.findById (id)
            .populate('category')
            .populate('author');

        if(!recipe) {
            throw new Error('Recipe not found!');
        }
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

export default {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}

