

function ProductCard({product}) {
  const formattedPrice = product.price.toLocaleString();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className=" w-full h-full object-cover transition-transform duration-300"
        />
        
        <span className="absolute top-0 left-0 bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
       <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 capitalize">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-600">
              ₦{formattedPrice}
          </span>
          <button className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-yellow-950 transition-colors duration-200 text-sm font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
