import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { removeFromWishlist, clearWishlist } from '../store/wishlistSlice';
import { addToCart } from '../store/cartSlice';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useToast } from '../components/ui/ToastContext';
import { useState } from 'react';

function WishlistPage() {
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [addedToCart, setAddedToCart] = useState({});

  const EXCHANGE_RATE = 1550;

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
    toast.wishlist('Removed from wishlist');
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch(clearWishlist());
      toast.info('Wishlist cleared');
    }
  };

  const handleAddToCart = (product) => {
    const priceInNaira = product.price * EXCHANGE_RATE;
    
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
    
    toast.cart(`${product.name} added to cart!`);
    
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              My Wishlist
            </h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          {wishlistItems.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
            >
              <X size={18} />
              Clear All
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Save items you love to your wishlist
            </p>
            <Link
              to="/"
              className="inline-block bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-950 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {wishlistItems.map((product) => {
              const priceInNaira = product.price * EXCHANGE_RATE;
              const isAdded = addedToCart[product.id];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <X size={18} className="text-red-600" />
                  </button>

                  {/* Product Image */}
                  <Link to={`/products/${product.category}/${product.subcategory}/${product.id}`}>
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-1">
                    <Link to={`/products/${product.category}/${product.subcategory}/${product.id}`}>
                      <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-gray-600 min-h-[2.5rem]">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3 h-5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-500'
                                : 'text-gray-400'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Spacer to push price and button to bottom */}
                    <div className="flex-1"></div>

                    {/* Price */}
                    <div className="mb-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-bold text-gray-900">
                          ₦{priceInNaira.toLocaleString()}
                        </span>
                        {!product.inStock && (
                          <span className="text-xs text-red-600 font-medium">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      disabled={!product.inStock}
                      onClick={() => handleAddToCart(product)}
                      className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-medium transition-all text-sm ${
                        product.inStock
                          ? isAdded
                            ? 'bg-green-600 text-white'
                            : 'bg-yellow-800 text-white hover:bg-yellow-950 active:scale-95'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart size={16} />
                      {isAdded ? 'Added!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default WishlistPage;