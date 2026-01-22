import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Package, Search, Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { cancelOrder } from '../store/orderSlice';
import { useToast } from '../components/ui/ToastContext';

const STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  processing: 'bg-blue-100 text-blue-800 border-blue-200',
  shipped: 'bg-purple-100 text-purple-800 border-purple-200',
  delivered: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200',
};

function OrderHistoryPage() {
  const dispatch = useDispatch();
  const toast = useToast();
  const orders = useSelector((state) => state.order.orders);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Filter and sort orders
  const filteredOrders = orders
    .filter(order => {
      const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.orderDate) - new Date(a.orderDate);
      } else if (sortBy === 'oldest') {
        return new Date(a.orderDate) - new Date(b.orderDate);
      } else if (sortBy === 'highest') {
        return b.total - a.total;
      } else {
        return a.total - b.total;
      }
    });

  const handleCancelOrder = (orderId) => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      dispatch(cancelOrder(orderId));
      toast.success('Order cancelled successfully');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">View and manage all your orders</p>
        </div>

        {orders.length === 0 ? (
          // Empty State
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-600 mb-6">
              Start shopping to see your orders here
            </p>
            <Link
              to="/"
              className="inline-block bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-950 transition-colors font-medium"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by order ID or tracking number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent"
                  />
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent appearance-none"
                  >
                    <option value="all">All Orders</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent appearance-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Amount</option>
                    <option value="lowest">Lowest Amount</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Showing {filteredOrders.length} of {orders.length} orders
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  {/* Order Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Order ID</p>
                          <p className="font-semibold text-gray-900">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Date</p>
                          <p className="font-medium text-gray-900">
                            {new Date(order.orderDate).toLocaleDateString('en-NG', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total</p>
                          <p className="font-semibold text-gray-900">
                            ₦{order.total.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[order.status]}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="px-6 py-4">
                    <div className="space-y-3">
                      {order.items.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 line-clamp-1">{item.name}</p>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              ₦{(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <p className="text-sm text-gray-600">
                          +{order.items.length - 3} more item{order.items.length - 3 !== 1 ? 's' : ''}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Order Actions */}
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        to={`/account/orders/${order.id}`}
                        className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                      >
                        <Package size={18} />
                        View Details
                      </Link>

                      {order.status === 'pending' && (
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-medium"
                        >
                          Cancel Order
                        </button>
                      )}

                      {(order.status === 'delivered' || order.status === 'cancelled') && (
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-800 text-white rounded-lg hover:bg-yellow-950 transition-colors font-medium">
                          Reorder
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredOrders.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default OrderHistoryPage;