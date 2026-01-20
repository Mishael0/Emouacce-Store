import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { removeFromWishlist, clearWishlist } from '../store/wishlistSlice';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch(clearWishlist());
    }
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
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Clear All
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Save items you love to your wishlist
            </p>
            <Link
              to="/"
              className="inline-block bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-950 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow relative group"
              >
                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
                >
                  <X size={18} className="text-red-600" />
                </button>

                <Link to={`/products/${product.category}/${product.subcategory}/${product.id}`}>
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
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
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-800">
                        ₦{product.price.toLocaleString()}
                      </span>
                      {!product.inStock && (
                        <span className="text-sm text-red-600 font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="p-4 pt-0">
                  <button
                    disabled={!product.inStock}
                    onClick={() => console.log('Add to cart:', product.id)}
                    className={`w-full flex items-center justify-center mt-auto gap-2 py-2 px-4 rounded-lg font-medium transition-all ${
                      product.inStock
                        ? 'bg-yellow-800 text-white hover:bg-yellow-950'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={18} />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default WishlistPage;