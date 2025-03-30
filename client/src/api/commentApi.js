import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"

const baseUrl = 'http://localhost:3050/api/comments'

export const useComments = (recipeId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!recipeId) return;

        setLoading(true);
        request.get(`${baseUrl}/${recipeId}`)
            .then((data) => setComments(data))
            .catch((error) => console.error("Error fetching comments:", error))
            .finally(() => setLoading(false));
    }, [recipeId]);

    return { comments, loading , setComments };
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
