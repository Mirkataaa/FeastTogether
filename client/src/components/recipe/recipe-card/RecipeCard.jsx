import { Link } from "react-router"; 

export default function RecipeCard ({
  title,
  imageUrl,
  category
}) {
    return (
      <Link to={"/"}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 group cursor-pointer mb-5">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold group-hover:underline decoration-green-500 transition-all">{title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
          <span className="bg-green-200 text-green-700 text-xs px-3 py-1 rounded-full w-fit mt-2">{category}</span>
          </div>
        </div>
      </div>
      </Link>
    );
  };
