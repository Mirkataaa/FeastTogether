import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Header() {

  const { email , isAuthenticated} = useAuth();

  return (
    <div className="bg-tea-green sticky top-0 z-50 shadow-md">
    <div className="w-full mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Feast <span className="font-bold text-glaucous">Together</span>
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-lg">
        <Link to="/recipes/all-recipes" className="hover:text-glaucous transition">Browse</Link>
        <Link to="/recipes/category/Just Tasty" className="hover:text-glaucous transition">Just Tasty</Link>
        <Link to="/recipes/category/Vegan Meals" className="hover:text-glaucous transition">Vegan Meals</Link>
        <Link to="/recipes/category/Desserts" className="hover:text-glaucous transition">Desserts</Link>
        <Link to="/about" className="hover:text-glaucous transition">About</Link>
        {isAuthenticated && (
          <Link to="/recipes/create" className="hover:text-glaucous transition">Create Recipe</Link>
        )}
      </nav>

      {/* Auth Buttons */}
      <div>
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span>{email}</span>
            <Link to="/logout" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full">
              Logout
            </Link>
          </div>
        ) : (
          <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full">
            Sign Up
          </Link>
        )}
      </div>
    </div>
  </div>
);
}