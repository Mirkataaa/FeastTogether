import Comment from "../models/Comment.js";
import Recipe from "../models/Recipes.js";

const getCommentsByUser  = async (userId) => {
    try {
        const comments = await Comment.find({user: userId}).populate('recipe' , 'title');
        return comments;
    } catch (error) {
        throw new Error('Error adding comment' + error.message);       
    }
}

const getComments = async (recipeId) => {
    try {
        const comments = await Comment.find({ recipe: recipeId })
            .populate('user', 'username')
            .sort({ createdAt: -1 });
        
        return comments;
    } catch (error) {
        throw new Error('Error fetching comments: ' + error.message);
    }
};

const addComment = async (recipeId, commentData) => {
    try {
        const comment = new Comment({ 
            ...commentData, // `{ user: userId, text: comment }`
            recipe: recipeId 
        });

        await comment.save();
        return comment;
    } catch (error) {
        console.error("Error adding comment:", error.message);
        throw new Error('Error adding comment: ' + error.message);
    }
};

const deleteComment = async (recipeId , commentId) => {
    try {
        const comment = await Comment.findById(commentId);
        if(!comment) {
            throw new Error('Comment not found!');
        }

        await comment.remove();

        const recipe = await Recipe.findByIdAndUpdate(
            recipeId,
            {$pull: {comments: commentId}},
            {new: true}
        ).populate('comments')

        return recipe;
    } catch (error) {
        throw new Error('Error adding comment' + error.message);
    }
}

export default {
    getCommentsByUser,
    addComment, 
    deleteComment,
    getComments
}