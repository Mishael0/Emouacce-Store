import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CreditCard, Truck, Lock, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { createOrder } from '../store/orderSlice';
import { clearCart } from '../store/cartSlice';
import { useToast } from '../components/ui/ToastContext';
import {
  validateCheckoutForm,
  formatCardNumber,
  formatExpiryDate,
  formatPhoneNumber
} from '../components/utils/validationUtils';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
];

function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const cartItems = useSelector((state) => state.cart.items);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: isAuthenticated ? user?.name?.split(' ')[0] || '' : '',
    lastName: isAuthenticated ? user?.name?.split(' ')[1] || '' : '',
    email: isAuthenticated ? user?.email || '' : '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50000 ? 0 : 5000;
  const tax = subtotal * 0.075;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Apply formatting
    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    } else if (name === 'postalCode') {
      formattedValue = value.replace(/\D/g, '').slice(0, 6);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    const validationErrors = validateCheckoutForm(formData);
    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate form
    const validationErrors = validateCheckoutForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order
      const orderData = {
        items: cartItems,
        shippingInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
        },
        paymentMethod: formData.paymentMethod,
        subtotal,
        shipping,
        tax,
        total,
      };

      dispatch(createOrder(orderData));
      dispatch(clearCart());
      toast.success('Order placed successfully!');
      navigate('/order-success');
    } catch (error) {
      console.log(error);
      toast.error('Failed to process order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                      touched.firstName && errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.firstName && errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                      touched.lastName && errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                      touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="08012345678"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                      touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Truck size={24} />
                Shipping Address
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Street address, P.O. box, etc."
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                      touched.address && errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {touched.address && errors.address && (
                    <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                        touched.city && errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {touched.city && errors.city && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.city}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                        touched.state && errors.state ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select State</option>
                      {NIGERIAN_STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {touched.state && errors.state && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.state}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="100001"
                      maxLength={6}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                        touched.postalCode && errors.postalCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {touched.postalCode && errors.postalCode && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.postalCode}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard size={24} />
                Payment Method
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-yellow-800 focus:ring-yellow-800"
                    />
                    <span className="text-sm font-medium text-gray-700">Credit/Debit Card</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-yellow-800 focus:ring-yellow-800"
                    />
                    <span className="text-sm font-medium text-gray-700">Bank Transfer</span>
                  </label>
                </div>

                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                          touched.cardNumber && errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {touched.cardNumber && errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cardholder Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="JOHN DOE"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                          touched.cardName && errors.cardName ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {touched.cardName && errors.cardName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle size={14} />
                          {errors.cardName}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="MM/YY"
                          maxLength={5}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                            touched.expiryDate && errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {touched.expiryDate && errors.expiryDate && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.expiryDate}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="123"
                          maxLength={4}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-800 focus:border-transparent ${
                            touched.cvv && errors.cvv ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {touched.cvv && errors.cvv && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.cvv}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'transfer' && (
                  <div className="pt-4 border-t">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        Bank transfer details will be provided after placing your order.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-gray-900">
                        ₦{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t">
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
                  <span className="font-semibold">₦{tax.toFixed(0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full mt-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-yellow-800 hover:bg-yellow-950 text-white'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock size={20} />
                    Place Order
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <Lock size={14} />
                <span>Secure checkout powered by SSL encryption</span>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default CheckoutPage;