import { useLogout } from "../../api/authApi";
import { Navigate } from "react-router"; 

export default function Logout() {
    const { isLoggedOut } = useLogout();

    // TODO: fix spinner , add guard .
    return isLoggedOut ? (
        <Navigate to="/" />
    ) : (
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    );
}
