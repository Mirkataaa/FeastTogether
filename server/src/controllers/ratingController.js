import { Router } from "express";
import ratingService from "../services/ratingService.js";

const ratingController = Router();

ratingController.post("/:recipeId", async (req, res) => {
    const { recipeId , userId , score } = req.body;
    try {
        const updatedRecipe = await ratingService.addRating(recipeId, userId, score);
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

ratingController.get("/:recipeId", async (req, res) => {
    const { recipeId } = req.params;
    try {
        const ratingData = await ratingService.getAverageRating(recipeId);
        res.status(200).json(ratingData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default ratingController;