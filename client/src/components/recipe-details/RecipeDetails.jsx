import { Link, useParams } from "react-router";
import { useDeleteRecipe, useRecipe } from "../../api/recipeApi";
import { useOptimistic, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CommentsView from "../comments-view/CommentsView";
import AddComment from "../add-comment/AddComment";
import { useComments, useCreateComments } from "../../api/commentApi";
import { useAvgRating, useRating } from "../../api/ratingApi";
import {v4 as uuid} from 'uuid'

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const { recipe } = useRecipe(recipeId);
    const [servings, setServings] = useState(recipe?.servings || 1);
    const {userId , username} = useAuth();
    const {deleteRecipe} = useDeleteRecipe();
    const {comments , addComment} = useComments(recipeId);
    const {create} = useCreateComments();
    const [optimisticComments , setOptimisticComments] = useOptimistic(comments , (state , newComment) => [...state , newComment])
    const { avgRating } = useAvgRating(recipeId);
    const { submitRating } = useRating(recipeId);
    const [selectedRating, setSelectedRating] = useState(null);
    const [isVoted , setIsVoted] = useState(false);

    function adjustIngredients(ingredient, servings, baseServings = 1) {
        if (!ingredient.amount || baseServings === 0) {
            return ` ${ingredient.unit} ${ingredient.name}`;
        }
        return `${(ingredient.amount * servings) / baseServings} ${ingredient.unit} ${ingredient.name}`;
    }

    const isOwner = userId === recipe.author?._id

    const recipeDeleteHandler = async () => {
        await deleteRecipe(recipeId)
    }


    const commentCreateHandler = async (comment) => {

        const newOptimisticComment = {
            _id: uuid(),
            recipeId,
            userId,
            username,
            comment,
            createdAt: new Date,
        };

        setOptimisticComments(newOptimisticComment);

        const newComment = await create(comment , recipeId , username);
        addComment({...newComment})
    }

    const handleRating = (star) => {
        setSelectedRating(star);
        submitRating(star, recipeId);
        setIsVoted(true)
    };    
    
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-4">{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-60 object-cover rounded-md" />
            <p className="text-gray-700 text-center mt-2 italic">{recipe.description}</p>
            <p className="text-sm text-gray-500 text-center">Category: {recipe.category} | Cooking Time: {recipe.cookingTime} mins</p>
            
            {isOwner && (
                <div className="flex justify-end mt-2 gap-2">
                    <Link to={`/recipes/edit/${recipeId}`} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</Link>
                    <button onClick={recipeDeleteHandler} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
            )}

            <div className="mt-6 notebook p-6 border-l-4 border-r-4 border-brown-600 bg-amber-100 shadow-md rounded-md relative">
                <h2 className="text-2xl font-semibold">Ingredients</h2>
                <p className="text-gray-600 mb-2">For {servings} servings</p>
                <div className="flex gap-2 mb-4">
                    <button onClick={() => setServings(servings + 1)} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
                    <button onClick={() => setServings(servings > 1 ? servings - 1 : 1)} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
                </div>
                <ul className="list-none">
                    {recipe.ingredients && recipe.ingredients.length > 0 ? (
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="border-b border-dashed border-brown-600 py-1">
                                {adjustIngredients(ingredient, servings, recipe.servings)}
                            </li>
                        ))
                    ) : (
                        <li>No ingredients found</li>
                    )}
                </ul>
            </div>

            <div className="mt-6 notebook p-6 border-l-4 border-r-4 border-brown-600 bg-amber-100 shadow-md rounded-md relative">
                <h2 className="text-2xl font-semibold">Instructions</h2>
                <p className="text-gray-700 mt-2">{recipe.instructions}</p>
            </div>

        <div className="mt-6">
                <h2 className="text-2xl font-semibold">Rate This Recipe</h2>
                {!isVoted && (
                    <div className="flex gap-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => handleRating(star)}
                                className={`px-2 py-1 ${selectedRating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                )}
                <div className="mt-4">
                    <h3 className="text-lg font-medium">Overall Rating</h3>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={`text-2xl ${avgRating >= star ? 'text-yellow-500' : 'text-gray-400'}`}>
                                ★
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-600">{avgRating?.toFixed(1)} / 5</p>
                </div>
            </div>
        <CommentsView comments={optimisticComments} />
        <AddComment
            userId={userId}
            recipeId={recipeId}
            onCreate={commentCreateHandler}
        />
           
        </div>
    );
}
