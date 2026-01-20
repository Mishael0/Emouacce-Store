import { Link } from 'react-router-dom';

function CategoryCard({ name, slug, image }) {
  return (
    <Link 
      to={`/products/${slug}`}
      className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden px-10 md:px-1 lg:px-0">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 rounded-lg group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {name}
        </h3>
        <span className="text-yellow-950 font-medium group-hover:bg-yellow-950 group-hover:rounded-lg group-hover:px-2 group-hover:text-white group-hover:py-1 transition-all duration-200">
          Explore →
        </span>
      </div>
    </Link>
  );
}

export default CategoryCard;