import { Router } from "express";
import commentService from "../services/commentService.js";

const commentController = Router();

commentController.get('/:recipeId', async (req, res) => {

    const {recipeId} = req.params;

    try {
        const comments = await commentService.getComments(recipeId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// * Add coment to a recipe
commentController.post('/:recipeId', async (req, res) => {
    const { recipeId } = req.params;
    const { user, text } = req.body;


    try {
        if (!user) {
            return res.status(401).json({ error: "Unauthorized: No user ID found" });
        }

        const recipe = await commentService.addComment(recipeId, { 
            user, 
            text 
        });

        res.status(201).json(recipe);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: error.message });
    }
});

// * Delete a comment  
commentController.delete('/:recipeId/:commentId' , async (req,res) => {
    const {recipeId , commentId} = req.params;

    try {
        const recipe = await commentService.deleteComment(recipeId , commentId);
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

export default commentController;