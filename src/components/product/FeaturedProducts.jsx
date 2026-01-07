import ProductCard from "./ProductCard";
import { products } from "../../data/products";

function FeaturedProducts() {
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
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>
         <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-semibold">
            View All Products
          </button>
        </div>
          </div>
    </section>
  )
}

export default FeaturedProducts
