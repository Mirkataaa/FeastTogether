import Rating from "../models/Rating.js";
import Recipe from "../models/Recipes.js";

const addRating =  async (recipeId , userId , score) => {
    try {
        const recipe = Recipe.findById(recipeId).populate('ratings');

        if(!recipe) {
            throw new Error('Recipe not found!');
        }

        let existingRating = await Rating.findOne({ user: userId, recipe: recipeId });

        if (existingRating) {
            existingRating.score = score;
            await existingRating.save();
        } else {
            const newRating = new Rating({ user: userId, score });
            await newRating.save();
            recipe.ratings.push(newRating._id);
        }

        const ratings = await Rating.find({ _id: { $in: recipe.ratings } });
        const totalScore = ratings.reduce((sum, r) => sum + r.score, 0);
        recipe.averageRating = totalScore / ratings.length;

        await recipe.save();
        return recipe;
    } catch (error) {
        throw new Error("Error rating recipe: " + error.message);
    }
}

export default {
    addRating
}