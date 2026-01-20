import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Package, Heart, LogOut } from 'lucide-react';
import { logout } from '../store/authSlice';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
        <h1 className="text-3xl font-bold text
        );
}

export default AccountPage;