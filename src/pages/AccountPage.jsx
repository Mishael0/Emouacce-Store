import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Package, Heart, LogOut } from 'lucide-react';
import { logout } from '../store/authSlice';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Avatar from '../assets/images/user/Avatar.jpg';

function AccountPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => 
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  // Redirect if not logged in
  if (!isAuthenticated) {
    navigate('/login', { state: { from: { pathname: '/account' } } });
    return null;
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* User Avatar & Info */}
          <div className="text-center mb-6 pb-6 border-b">
            <img
              src={Avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 text-xs"
            />
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <Link
              to="/account"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-50 text-yellow-800 font-medium"
            >
              <User size={20} />
              Profile
            </Link>
            <Link
              to="/account/orders"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <Package size={20} />
              Orders
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <Heart size={20} />
              Wishlist ({wishlistCount})
            </Link>
            <Link
              to="/account/addresses"
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <MapPin size={20} />
              Addresses
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 font-medium"
            >
              <LogOut size={20} />
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <Package size={40} className="text-yellow-800" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Wishlist</p>
                <p className="text-3xl font-bold text-gray-900">{wishlistCount}</p>
              </div>
              <Heart size={40} className="text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cart Items</p>
                <p className="text-3xl font-bold text-gray-900">{cartCount}</p>
              </div>
              <Package size={40} className="text-slate-800" />
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
            <Link
              to="/account/edit"
              className="text-yellow-800 hover:text-yellow-950 font-medium text-sm"
            >
              Edit Profile
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <User className="text-gray-400 mt-1" size={20} />
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="text-gray-900 font-medium">{user.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gray-400 mt-1" size={20} />
              <div>
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="text-gray-900 font-medium">{user.email}</p>
              </div>
            </div>

            {user.phone && (
              <div className="flex items-start gap-4">
                <Phone className="text-gray-400 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="text-gray-900 font-medium">{user.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Orders Placeholder */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Orders</h2>
          <div className="text-center py-12">
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 mb-4">No orders yet</p>
            <Link
              to="/"
              className="inline-block bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-950 font-medium"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</div>
);
}
export default AccountPage;
