import { useState , useEffect } from "react";
import request from "../utils/request";

const baseUrl = 'http://localhost:3050/api/recipes';

export const useRecipes = () => {
    const [recipes , setRecipes] = useState([]);

    console.log(recipes);
    

    useEffect(() => {
        request.get(baseUrl)
            .then(setRecipes) 
    } , []);

    return {recipes};
}