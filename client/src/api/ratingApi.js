import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth";


const baseUrl = "http://localhost:3050/api/ratings"

export const useRating = () => {
    const [rating , setRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const {request , userId} = useAuth();

    console.log(userId);
    

    const submitRating = (score , recipeId) => {
        setLoading(true);
        request.post(`${baseUrl}/${recipeId}`, {  recipeId ,userId , score })
            .then((res) => setRating(res.averageRating))
            .catch((error) => console.error("Error submitting rating:", error.message))
            .finally(() => setLoading(false));
    };

    return { 
        rating, 
        submitRating, 
        loading };
};


export const useAvgRating = (recipeId) => {
    const [avgRating, setAvgRating] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!recipeId) return;

        setLoading(true);
        
        fetch(`http://localhost:3050/api/ratings/${recipeId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setAvgRating(data.averageRating ?? 0);
            })
            .catch((error) => {
                console.error("Error fetching average rating:", error);
                setAvgRating(0);
            })
            .finally(() => setLoading(false));
    }, [recipeId]);

    return { avgRating, loading };
};

