import { useEffect, useReducer, useState } from "react";
import useAuth from "../hooks/useAuth"

const baseUrl = 'http://localhost:3050/api/comments'

const commentsReducer = (state , action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state , action.payload]
        case 'GET_ALL':
            return action.payload;
        default:
            return state;
    }
};

export const useComments = (recipeId) => {
    const { request } = useAuth();
    const [comments , dispatch] = useReducer(commentsReducer , []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        request.get(`${baseUrl}/${recipeId}`)
            .then(data => dispatch({type: 'GET_ALL' , payload: data}))
            .catch((error) => console.error("Error fetching comments:", error))
            .finally(() => setLoading(false));
    }, [recipeId , request]);

    return { 
        comments, 
        loading , 
        addComment: (data) => dispatch({type: 'ADD_COMMENT' , payload: data}) 
    };
};

export const useCreateComments = () => {
    const { request, userId } = useAuth();

    const create = (comment, recipeId) => {
  
        return request.post(`${baseUrl}/${recipeId}`, { 
            user: userId, 
            text: comment 
        });
    };

    return { 
        create, 
    };
};
