import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  ChevronRight, 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  Minus,
  Plus,
  Check
} from 'lucide-react';
import { addToCart } from '../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import { productItems } from '../data/products';
import ProductCard from '../components/product/ProductCard';

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === productId);
  
  const EXCHANGE_RATE = 1550;

  // Find product
  useEffect(() => {
    const foundProduct = productItems.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Product not found, redirect to 404
      navigate('/404');
    }
  }, [productId, navigate]);

  // Get related products (same category, different product)
  const relatedProducts = productItems
    .filter(p => p.category === product?.category && p.id !== productId)
    .slice(0, 5);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  const priceInNaira = product.price * EXCHANGE_RATE;
  const originalPriceInNaira = product.originalPrice ? product.originalPrice * EXCHANGE_RATE : null;
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  const savings = originalPriceInNaira ? originalPriceInNaira - priceInNaira : 0;

  const images = product.images || [product.image];

  const handleQuantityChange = (type) => {
    if (type === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
    }
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight size={16} />
          <Link to={`/products/${product.category}`} className="hover:text-gray-900 capitalize">
            {product.category.replace(/-/g, ' ')}
          </Link>
          <ChevronRight size={16} />
          <Link to={`/products/${product.category}/${product.subcategory}`} className="hover:text-gray-900 capitalize">
            {product.subcategory.replace(/-/g, ' ')}
          </Link>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden mb-4 shadow-sm">
              <div className="aspect-square relative">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {discountPercent > 0 && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md font-bold">
                    -{discountPercent}%
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-yellow-800'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div>
            {/* Brand */}
            <p className="text-yellow-800 font-semibold mb-2">{product.brand}</p>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  ₦{priceInNaira.toLocaleString()}
                </span>
                {originalPriceInNaira && (
                  <span className="text-2xl text-gray-500 line-through">
                    ₦{originalPriceInNaira.toLocaleString()}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <p className="text-green-600 font-semibold">
                  You save ₦{savings.toLocaleString()} ({discountPercent}%)
                </p>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check size={20} />
                  <span className="font-semibold">In Stock ({product.stock} available)</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <span className="font-semibold">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-6 bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}: </span>
                      <span className="text-sm font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-900 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    disabled={quantity <= 1}
                    className="px-4 py-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 py-3 font-semibold border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    disabled={quantity >= product.stock}
                    className="px-4 py-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.stock} items available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-lg font-semibold transition-all ${
                  product.inStock
                    ? addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-yellow-800 text-white hover:bg-yellow-950'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart size={20} />
                {addedToCart ? 'Added to Cart!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <button
                onClick={handleWishlistToggle}
                className="px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all"
              >
                <Heart
                  size={24}
                  className={isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                />
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <Truck className="text-yellow-800 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-sm">Free Delivery</p>
                  <p className="text-xs text-gray-600">On orders over ₦50,000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-yellow-800 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-600">100% secure transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="text-yellow-800 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-600">14-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;