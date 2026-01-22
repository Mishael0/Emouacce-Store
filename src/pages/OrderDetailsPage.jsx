import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  CreditCard,
  Phone,
  Mail,
  ArrowLeft,
  Download,
  XCircle
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { cancelOrder } from '../store/orderSlice';
import { useToast } from '../components/ui/ToastContext';

const ORDER_TIMELINE = {
  pending: [
    { status: 'Order Placed', completed: true, icon: CheckCircle },
    { status: 'Processing', completed: false, icon: Clock },
    { status: 'Shipped', completed: false, icon: Truck },
    { status: 'Delivered', completed: false, icon: Package },
  ],
  processing: [
    { status: 'Order Placed', completed: true, icon: CheckCircle },
    { status: 'Processing', completed: true, icon: Clock },
    { status: 'Shipped', completed: false, icon: Truck },
    { status: 'Delivered', completed: false, icon: Package },
  ],
  shipped: [
    { status: 'Order Placed', completed: true, icon: CheckCircle },
    { status: 'Processing', completed: true, icon: Clock },
    { status: 'Shipped', completed: true, icon: Truck },
    { status: 'Delivered', completed: false, icon: Package },
  ],
  delivered: [
    { status: 'Order Placed', completed: true, icon: CheckCircle },
    { status: 'Processing', completed: true, icon: Clock },
    { status: 'Shipped', completed: true, icon: Truck },
    { status: 'Delivered', completed: true, icon: Package },
  ],
  cancelled: [
    { status: 'Order Placed', completed: true, icon: CheckCircle },
    { status: 'Cancelled', completed: true, icon: XCircle },
  ],
};

function OrderDetailsPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  
  const order = useSelector((state) =>
    state.order.orders.find((o) => o.id === orderId)
  );

  useEffect(() => {
    if (!order) {
      navigate('/account/orders');
    }
  }, [order, navigate]);

  const handleCancelOrder = () => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      dispatch(cancelOrder(orderId));
      toast.success('Order cancelled successfully');
    }
  };

  const handleDownloadInvoice = () => {
    window.print();
  };

  if (!order) {
    return null;
  }

  const timeline = ORDER_TIMELINE[order.status] || ORDER_TIMELINE.pending;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/account/orders"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Orders
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Details</h1>
              <p className="text-gray-600">Order ID: {order.id}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDownloadInvoice}
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Download size={18} />
                Download Invoice
              </button>
              {order.status === 'pending' && (
                <button
                  onClick={handleCancelOrder}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Status</h2>
              <div className="relative">
                {timeline.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4 mb-8 last:mb-0">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        {index < timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-12 ${
                              step.completed ? 'bg-green-600' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        <p
                          className={`font-semibold ${
                            step.completed ? 'text-gray-900' : 'text-gray-400'
                          }`}
                        >
                          {step.status}
                        </p>
                        {step.completed && index === 0 && (
                          <p className="text-sm text-gray-600 mt-1">
                            {new Date(order.orderDate).toLocaleString('en-NG', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {order.status === 'shipped' && (
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-900 mb-2">
                    Tracking Number: {order.trackingNumber}
                  </p>
                  <p className="text-sm text-purple-700">
                    Your package is on its way! Expected delivery in 2-3 business days.
                  </p>
                </div>
              )}
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <Link
                        to={`/products/${item.category}/${item.subcategory}/${item.id}`}
                        className="font-semibold text-gray-900 hover:text-yellow-800"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">{item.brand}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        ₦{item.price.toLocaleString()} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₦{order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>₦{order.shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (7.5%)</span>
                  <span>₦{order.tax.toFixed(0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t">
                  <span>Total</span>
                  <span>₦{order.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Shipping Address
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="font-medium">
                  {order.shippingInfo.firstName} {order.shippingInfo.lastName}
                </p>
                <p>{order.shippingInfo.address}</p>
                <p>
                  {order.shippingInfo.city}, {order.shippingInfo.state}{' '}
                  {order.shippingInfo.postalCode}
                </p>
                <div className="pt-3 border-t mt-3 space-y-2">
                  <p className="flex items-center gap-2 text-sm">
                    <Phone size={16} />
                    {order.shippingInfo.phone}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    {order.shippingInfo.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard size={20} />
                Payment Method
              </h2>
              <p className="text-gray-700 capitalize">{order.paymentMethod}</p>
              <p className="text-sm text-green-600 font-medium mt-2">✓ Payment Confirmed</p>
            </div>

            {/* Need Help */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-700 mb-4">
                Contact our customer support for assistance with your order.
              </p>
              <Link
                to="/contact"
                className="block text-center bg-white text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-200"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OrderDetailsPage;