// components/Categories.jsx
import { useState } from "react";
import ProductCardContainer from "./ProductCardContainer";
import lessons from "../lessons";

const getUniqueCategories = (data) => {
  const categories = new Set(data.map(item => item.category));
  return ["All", ...Array.from(categories)];
};

const Categories = () => {
  const [selected, setSelected] = useState("All");
  const categories = getUniqueCategories(lessons);

  return (
    <div className="mx-4 sm:mx-6 md:mx-10 pt-20 md:pt-24 min-h-screen">
      <div className="flex justify-center mb-3 sm:mb-4">
        <p className="font-semibold text-[17px] sm:text-lg md:text-[20px] text-black">All Notes</p>
      </div>
      
      <div className="flex gap-2 sm:gap-3 md:gap-4 border-2 border-gray-300/10 bg-gray-200 rounded-lg p-2 sm:p-3 mt-2 overflow-x-auto">
        {categories.map(cat => (
          <button
            key={cat}
            className={`whitespace-nowrap px-2 sm:px-3 py-1 rounded-md transition-all duration-200 ease-in-out text-xs sm:text-[14px] cursor-pointer ${
              selected === cat ? "bg-black hover:bg-gray-900 text-white" : "bg-gray-300 hover:bg-gray-400/50"
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProductCardContainer filter={selected === "All" ? null : selected} />
    </div>
  );
};

export default Categories;