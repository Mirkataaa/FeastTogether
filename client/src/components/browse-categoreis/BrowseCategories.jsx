import { Link, useParams } from "react-router";
import { useRecipeCategory } from "../../api/recipeApi";

export default function BrowseCategories() {
    const { category } = useParams();
    const { data } = useRecipeCategory(category);

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.recipes.length > 0 ? (
            data.recipes.map((recipe) => (
                <Link to={`/recipes/${recipe._id}`} key={recipe._id}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl group cursor-pointer">
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="p-4 space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{recipe.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full">{category}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        ) : (
            <p className="text-center text-xl text-gray-500">No recipes found.</p>
        )}
    </section>
    );
};
