import { Link } from "react-router"; 

export default function RecipeCard ({
  _id,
  title,
  imageUrl,
  category
}) {
    return (
      <Link to={`/recipes/${_id}`} className="block">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.03] group cursor-pointer mb-6">
        <div className="h-52 overflow-hidden rounded-t-2xl">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-all">{title}</h3>
          <span className="bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full mt-2 inline-block">{category}</span>
        </div>
      </div>
    </Link>
    );
  };
