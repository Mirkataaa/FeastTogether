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
}