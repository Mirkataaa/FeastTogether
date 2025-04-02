import { Link } from "react-router";
import { useLatestRecipe } from "../../api/recipeApi";
import useAuth from "../../hooks/useAuth";

export default function HomeRecipe () {

  const {recipes} = useLatestRecipe();
  const {userId} = useAuth();

    return (
      <div className="bg-white">
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-400 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-screen-xl mx-auto text-center text-white relative z-10 px-6">
          <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Feast Together</h1>
          <p className="text-lg mb-8">
          Discover new recipes, share your culinary creations, and get inspired! Whether you're a novice in the kitchen or a seasoned chef, there's something here for everyone.
          </p>
          {!userId && (
              <Link to="/register" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg">
              SignUp
            </Link>
          )}
        </div>
      </section>

      <section className="bg-zinc-50 overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-8 lg:py-16">
          <div className="flex flex-wrap justify-center gap-4">
            {recipes.map((recipe) => (
              <Link key={recipe._id} to={`recipes/${recipe._id}`} className="">
                <img
                  src={recipe.imageUrl}
                  className="rounded-xl transition-transform duration-500 transform hover:scale-105 w-64 h-64 object-cover"
                  alt="Recipe"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    );
};