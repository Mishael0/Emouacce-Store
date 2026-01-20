import CategoryCard from "./CategoryCard";
import { navigationData } from "../../data/categories";

function CategorySection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600">
            Browse our wide selection of products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationData.categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              slug={category.slug}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;