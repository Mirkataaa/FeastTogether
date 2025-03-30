import { Link } from "react-router";
import { useLatestRecipe } from "../../api/recipeApi";

export default function HomeRecipe () {

  const {recipes} = useLatestRecipe();

  console.log(recipes);

  
  

    return (
        <div className="bg-white">
      <section className="relative bg-gradient-to-r from-blue-500 to-teal-400 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-screen-xl mx-auto text-center text-white relative z-10 px-6">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Lorem ipsum
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, facilis!
          </p>
          <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg">
            LogIn
          </button>
        </div>
      </section>

      <section className="bg-zinc-50 overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            {recipes.map(recipe => (
               <Link key={recipe._id} to={`recipes/${recipe._id}`}>
               <img
                 src={recipe.imageUrl}
                 className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                 alt="#_"
               />
             </Link>
            ))}
           
          </div>
        </div>
      </section>

      <section className="bg-teal-600 text-white py-20 text-center">
        
      </section>
    </div>
    );
};