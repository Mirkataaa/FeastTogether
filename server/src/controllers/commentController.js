import { Router } from "express";
import commentService from "../services/commentService.js";

const commentController = Router();

// * Add coment to a recipe
commentController.post('/:recipeId' , async (req,res) => {
    const {recipeId} = req.params;
    const {text} = req.body;

    try {
        const recipe = await commentService.addComment(recipeId , {user: req.userId , text});
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({error: error.message});
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


// * Get all comments for a user - TODO: check if i am going to use this.
commentController.get('/user/:userId' , async (req,res) => {
    const {userId} = req.params;

    try {
        const comments = await commentService.getCommentsByUser(userId);
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// * Edit comment
commentController.put('/:commentId', async (req, res) => {
    const { commentId } = req.params;
    const { text } = req.body;

    try {
        const updatedComment = await commentService.updateComment(commentId, text);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default commentController;