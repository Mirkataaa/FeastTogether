import { Link, useParams } from "react-router";
import { useRecipeCategory } from "../../api/recipeApi";

export default function BrowseCategories() {
    const { category } = useParams();
    const { data } = useRecipeCategory(category);

    return (
        <section className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-4 m-5 ">
            {data.recipes.length > 0 ? (
                data.recipes.map(recipe => (
                    <Link to={`/recipes/${recipe._id}`} key={recipe._id}>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 group cursor-pointer mb-5">
                            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold group-hover:underline decoration-green-500 transition-all">{recipe.title}</h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full w-fit mt-2">{category}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </section>
    );
};
