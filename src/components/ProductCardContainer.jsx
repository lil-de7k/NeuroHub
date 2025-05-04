// components/ProductCardContainer.jsx
import ProductCard from "./ProductCard";
import lessons from "../lessons"

const ProductCardContainer = ({ filter }) => {
  const filtered = filter ? lessons.filter(l => l.category === filter) : lessons;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 mt-4">
      {filtered.map(lesson => (
        <ProductCard key={lesson.id} lesson={lesson} />
      ))}
      {filtered.length === 0 && (
        <div className="col-span-full text-center py-8 text-gray-500">
          No lessons found in this category.
        </div>
      )}
    </div>
  );
};

export default ProductCardContainer;