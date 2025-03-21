export default function RecipeCard ({
  title,
  imageUrl,
  index,
  category
}) {
    const cardSize = ["row-span-1" , "row-span-2" , "row-span-3"];

    return (
      <div className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col ${cardSize[index % cardSize.length]} transform transition duration-300 hover:scale-105 group cursor-pointer`}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold group-hover:underline decoration-green-500 transition-all">{title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
              <span key={index} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{category}</span>
          </div>
        </div>
      </div>
    );
  };