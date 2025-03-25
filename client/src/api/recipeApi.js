import { useState , useEffect } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3050/api/recipes';

export const useRecipes = () => {
    const [recipes , setRecipes] = useState([]);
    

    useEffect(() => {
        request.get(baseUrl)
            .then(setRecipes) 
    } , []);

    return {recipes};
};

export const useRecipe = (recipeId) => {
    const [recipe , setRecipe] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${recipeId}`)
            .then(setRecipe);
    } , [recipeId]);

    return {
        recipe,
    }
}

export const useCreateRecipe = () => {

    const {request: requester} = useAuth();
    
    const create = (recipeData) =>
        requester.post(`${baseUrl}/create` , recipeData);

    return {
        create,
    }
}