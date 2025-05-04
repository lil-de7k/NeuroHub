// components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ lesson }) => {
  return (
    <Link to={`/lesson/${lesson.id}`} className="rounded-lg border-2 border-gray-300/10 p-3 sm:p-4 bg-gray-200 transition-all duration-200 ease-in-out hover:shadow-xl block h-full">
      <div className="flex justify-end">
        <p className="text-xs text-gray-950 opacity-95">{lesson.date}</p>
      </div>
      <h2 className="text-sm sm:text-[15px] md:text-[17px] font-semibold text-gray-950 sm:mt-0.5 line-clamp-2">{lesson.name}</h2>
      <p className="text-[9px] sm:text-[10px] w-fit tracking-wide px-2 sm:px-3 py-1 sm:py-1.5 mt-2 sm:mt-2.5 rounded-md bg-gray-300 text-gray-950 font-medium">{lesson.category}</p>
    </Link>
  );
};

export default ProductCard;