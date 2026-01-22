import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../store/wishlistSlice';
import { addToCart } from '../../store/cartSlice';
import { useState } from 'react';

function ProductCard({ product, variant = 'grid' }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [addedToCart, setAddedToCart] = useState(false);
  
  // Check if product is in wishlist
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  
  // Convert USD to Naira (Exchange rate: $1 = ₦1,550)
  const EXCHANGE_RATE = 1550;
  const priceInNaira = product.price * EXCHANGE_RATE;
  const formattedPrice = priceInNaira.toLocaleString();
  
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Handle wishlist toggle
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.inStock) {
      dispatch(addToCart({
        id: product.id,
        name: product.name,
        price: priceInNaira,
        image: product.image,
        brand: product.brand,
        category: product.category,
        subcategory: product.subcategory,
        inStock: product.inStock,
        stock: product.stock
      }));
      
      // Show feedback
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  // Featured variant - simpler layout for homepage
      if (variant === 'featured') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
          <Link to={`/products/${product.category}/${product.subcategory}/${product.id}`}>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </Link>
          <span className="absolute top-0 left-0 bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
            {product.category.replace(/-/g, ' ')}
          </span>
          
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <Heart 
              size={20} 
              className={isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}
            />
          </button>
        </div>
        
        <div className="p-4 flex flex-col  flex-1">
          <Link to={`/products/${product.category}/${product.subcategory}/${product.id}`}>
            <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2 hover:text-gray-600 min-h-[3rem]">
              {product.name}
            </h3>
            </Link>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
              {product.description}
            </p>

           <div className="flex-1"></div>
          
          
          <div  className="mt-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-bold text-gray-900">
                ₦{formattedPrice}
              </span>
              {!product.inStock && (
                <span className="text-xs text-red-600 font-medium">Out of Stock</span>
              )}
            </div>
            <div>
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-1 px-2 rounded-lg transition-all duration-200 text-xs sm:sm font-semibold flex items-center justify-center gap-2 ${
                product.inStock
                  ? addedToCart
                    ? 'bg-green-600 text-white'
                    : 'bg-yellow-800 text-white hover:bg-yellow-950'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={18} />
              {addedToCart ? 'Added!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {discountPercent > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-700 text-white px-2 py-1 rounded-md text-sm font-semibold">
          -{discountPercent}%
        </div>
      )}
      
      <button
        className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
        onClick={handleWishlistToggle}
      >
        <Heart 
          size={20} 
          className={isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}
        />
      </button>

      <Link 
        to={`/products/${product.category}/${product.subcategory}/${product.id}`}
        className="flex-shrink-0"
      >
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
         </Link>
        
        <div className="p-4 flex flex-col flex-1">
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          
          <Link to={`/products/${product.category}/${product.subcategory}/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 min-h-[2.5rem]">
            {product.name}
          </h3>
           </Link>
          
          <div className="flex items-center gap-2  mb-2 h-5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.reviews})</span>
          </div>

          <div className="mb-2">
             <div className="flex flex-col items-baseline gap-2">
            <span className="text-sm font-bold text-gray-900">
              ₦{formattedPrice}
            </span>
          
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ₦{(product.originalPrice * EXCHANGE_RATE).toLocaleString()}
              </span>
            )}
          </div>
          </div>
          
          {!product.inStock && (
            <p className="text-sm text-red-600 font-medium mb-2">Out of Stock</p>
          )}
      <div className="flex-1"></div>

     
        <button
          disabled={!product.inStock}
          onClick={handleAddToCart}
          className={`w-full flex text-sm items-center justify-center gap-2 py-1 px-2 rounded-lg mt-auto font-medium transition-all ${
            product.inStock
              ? addedToCart
                ? 'bg-green-600 text-white'
                : 'bg-yellow-800 text-white hover:bg-yellow-950 active:scale-95'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart size={18} />
          {addedToCart ? 'Added!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      
    </div>
     </div>
  );
}
export default ProductCard;