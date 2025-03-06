import { Router } from "express";
import ratingService from "../services/ratingService.js";

const ratingController = Router();

ratingController.post("/:recipeId" , async (req,res) => {
    const {recipeId} = req.params;
    const {score} = req.body;
    const userId = req.userId;

    try {
        const updatedRecipe = ratingService.addRating(recipeId , userId , score);
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});