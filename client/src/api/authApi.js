import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import request from "../utils/request";


const baseUrl = 'http://localhost:3050/api/user';

export const useLogin = () => {
    const login = async (email, password) =>
        request.post(
            `${baseUrl}/login`,
            { email, password },
        );
    return {
        login,
    }
};

export const useRegister = () => {
    const register = (username , email , password , rePass) => 
        request.post(
            `${baseUrl}/register`,
            {username , email , password , rePass}
        );

    return {
        register,
    }
};

export const useLogout = () => {
    const {accessToken , userLogoutHandler} = useUserContext();

    useEffect(() => {
        if(!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout` , null , options)
            .then(userLogoutHandler);
    }, [accessToken , userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }
}