import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CheckCircle, Package, Truck, Home, FileText } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { clearCurrentOrder } from '../store/orderSlice';

function OrderSuccessPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentOrder = useSelector((state) => state.order.currentOrder);

  useEffect(() => {
    if (!currentOrder) {
      navigate('/');
    }

    // Cleanup on unmount
    return () => {
      dispatch(clearCurrentOrder());
    };
  }, [currentOrder, navigate, dispatch]);

  if (!currentOrder) {
    return null;
  }

  const { id, trackingNumber, shippingInfo, items, subtotal, shipping, tax, total, orderDate } = currentOrder;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. We've sent a confirmation email to{' '}
            <span className="font-semibold">{shippingInfo.email}</span>
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b">
            <div>
              <p className="text-sm text-gray-600 mb-1">Order Number</p>
              <p className="font-semibold text-gray-900">{id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Tracking Number</p>
              <p className="font-semibold text-gray-900">{trackingNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Order Date</p>
              <p className="font-semibold text-gray-900">
                {new Date(orderDate).toLocaleDateString('en-NG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="mb-6 pb-6 border-b">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Truck size={20} />
              Shipping Address
            </h3>
            <div className="text-gray-700">
              <p className="font-medium">
                {shippingInfo.firstName} {shippingInfo.lastName}
              </p>
              <p>{shippingInfo.address}</p>
              <p>
                {shippingInfo.city}, {shippingInfo.state} {shippingInfo.postalCode}
              </p>
              <p className="mt-2">
                <span className="text-sm text-gray-600">Phone:</span> {shippingInfo.phone}
              </p>
              <p>
                <span className="text-sm text-gray-600">Email:</span> {shippingInfo.email}
              </p>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6 pb-6 border-b">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Package size={20} />
              Order Items
            </h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      ₦{item.price.toLocaleString()} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span>₦{shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (7.5%)</span>
                <span>₦{tax.toFixed(0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>We'll send you a confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Your order will be processed within 24 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Estimated delivery: 3-5 business days</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Track your order using the tracking number provided</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/account/orders"
            className="flex items-center justify-center gap-2 bg-yellow-800 text-white py-3 px-6 rounded-lg hover:bg-yellow-950 transition-colors font-medium"
          >
            <FileText size={20} />
            View Order Details
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            <Home size={20} />
            Continue Shopping
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            <FileText size={20} />
            Print Receipt
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">Need help with your order?</p>
          <Link to="/contact" className="text-yellow-800 hover:text-yellow-950 font-medium">
            Contact Customer Support
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OrderSuccessPage;