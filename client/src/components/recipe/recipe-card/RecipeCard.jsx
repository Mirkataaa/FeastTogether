

export default function RecipeCard ({ recipe , index }) {
    const cardSize = ["row-span-1" , "row-span-2" , "row-span-3"];

    return (
      <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${cardSize[index % cardSize.length]} transform transition duration-300 hover:scale-105 group cursor-pointer`}>
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="p-4">
            {/* // ! add conditional underline (whole card) */}
          <h3 className="text-lg font-semibold group-hover:underline decoration-green-500 transition-all">{recipe.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };