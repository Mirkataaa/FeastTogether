import Rating from "../models/Rating.js";
import Recipe from "../models/Recipes.js";

const addRating = async (recipeId, userId, score) => {
    try {
        const recipe = await Recipe.findById(recipeId).populate("ratings");

        if (!recipe) {
            throw new Error("Recipe not found!");
        }

        let existingRating = await Rating.findOne({ user: userId, recipe: recipeId });

        if (existingRating) {
            existingRating.score = score;
            await existingRating.save();
        } else {
            const newRating = new Rating({ user: userId, recipe: recipeId, score });
            await newRating.save();
            recipe.ratings.push(newRating._id);
        }

        const ratings = await Rating.find({ recipe: recipeId });
        if (ratings.length === 0) {
            recipe.averageRating = 0;
        } else {
            const totalScore = ratings.reduce((sum, r) => sum + r.score, 0);
            recipe.averageRating = totalScore / ratings.length;
        }

        await recipe.save();
        return recipe;
    } catch (error) {
        throw new Error("Error rating recipe: " + error.message);
    }
};


const getAverageRating = async (recipeId) => {
    try {
        const recipe = await Recipe.findById(recipeId);
        if (!recipe) throw new Error("Recipe not found!");
        console.log( 'eho' , recipe.averageRating);
        return { averageRating: recipe.averageRating || 0 };
    } catch (error) {
        throw new Error("Error fetching average rating: " + error.message);
    }
};

export default {
    addRating,
    getAverageRating
}