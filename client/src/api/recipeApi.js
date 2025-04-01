import { useState , useEffect, useCallback } from "react";
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

export const useRecipeCategory = (category) => {
    const [data , setData] = useState({recipes: [] , totalPages: 0, currentPage: 1});

    useEffect(() => {
        
        if(!category) return;

        request.get(`${baseUrl}/category/${category}`)
            .then(setData)
    } , [category]);

    return {
        data,
    }
}

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

export const useLatestRecipe = () => {
    const [recipes , setRecipes] = useState([]);
    
    useEffect(() => {
        request.get(`${baseUrl}/latest`)
            .then(setRecipes);
    },[]);

    return {
        recipes,
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

export const useEditRecipe = () => {
    const {request} = useAuth();
    
    const edit = useCallback((recipeId , recipeData) => 
        request.put(`${baseUrl}/edit/${recipeId}` , {_id: recipeId , ...recipeData}
        ) , [request]);
    

    return {
        edit,
    }

}

export const useDeleteRecipe = () => {
    const {request} = useAuth();

    const deleteRecipe = (recipeId) =>
        request.delete(`${baseUrl}/${recipeId}`)
        
    return {
        deleteRecipe,
    }
}