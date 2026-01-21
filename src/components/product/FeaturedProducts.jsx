import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "../../data/products";
import { Link } from 'react-router-dom';

function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-10 px-12 sm:px-8 lg:px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our handpicked selection of premium items
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              variant="featured"
            />
          ))}
        </div>
        
          <div className="text-center mt-12">
          <Link 
            to="/products/all" 
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;