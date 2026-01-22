import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../store/cartSlice';


function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5000 : 0; // Free shipping over a certain amount can be added
  const tax = subtotal * 0.075; // 7.5% VAT
  const total = subtotal + shipping + tax;

  const handleRemove = (productId) => {
    if (window.confirm('Remove this item from cart?')) {
      dispatch(removeFromCart(productId));
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your entire cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-red-600 hover:text-red-700 font-medium flex items-center mt-10 gap-2"
            >
              <Trash2 size={18} />
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add items to your cart to continue shopping
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-950 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </Link>
          </div>
        ) : (
          // Cart with Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <Link
                      to={`/products/${item.category}/${item.subcategory}/${item.id}`}
                      className="flex-shrink-0"
                    >
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform"
                        />
                      </div>
                    </Link>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <Link
                            to={`/products/${item.category}/${item.subcategory}/${item.id}`}
                            className="font-semibold text-gray-900 hover:text-gray-600 line-clamp-2"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
                        </div>
                        
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            disabled={item.quantity <= 1}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
                              item.quantity <= 1
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Minus size={16} />
                          </button>
                          
                          <span className="w-12 text-center font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            disabled={item.quantity >= item.stock}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg border ${
                              item.quantity >= item.stock
                                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="mt-4 lg:text-right">
                          <p className="text-base font-bold text-gray-900">
                            ₦{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">
                            ₦{item.price.toLocaleString()} each
                          </p>
                        </div>
                      </div>

                      {item.quantity >= item.stock && (
                        <p className="text-xs text-red-600 mt-2">
                          Maximum stock reached ({item.stock} available)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">₦{shipping.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (7.5%)</span>
                    <span className="font-semibold">₦{tax.toLocaleString(2)}</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                  ₦{total.toLocaleString()}
                  </span>
                  </div>
                  </div>
                  </div>
            <Link
              to="/checkout"
              className="w-full bg-yellow-800 text-white py-3 rounded-lg hover:bg-yellow-950 transition-colors font-semibold text-center block mb-3"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/"
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                ✓ Free shipping on orders over ₦50,000
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>

  <Footer />
</div>
);
}
export default CartPage;