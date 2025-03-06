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

const addComment = async (recipeId , commentData) => {
    try {
        const comment = new Comment(commentData);
        await comment.save();

        const recipe = await Recipe.findByIdAndUpdate(
            recipeId,
            {$push: {comment: comment._id}},
            {new: true}
        ).populate('comments');

        return recipe;
    } catch (error) {
        throw new Error('Error adding comment' + error.message);
    }
};

const updateComment = async (commentId , newText) => {
    try {
        const comment = await Comment.findById(commentId);
        
        if(!comment) {
            throw new Error('Comment not found!');
        }

        comment.text = newText;
        await comment.save();
        return comment;
    } catch (error) {
        throw new Error('Error adding comment' + error.message);
    }
}

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
    updateComment,
    deleteComment
}