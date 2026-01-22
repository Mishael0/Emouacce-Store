// Validation utility functions for forms

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validatePhone = (phone) => {
  const phoneRegex = /^(\+234|0)[789]\d{9}$/; // Nigerian phone format
  if (!phone) return 'Phone number is required';
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return 'Please enter a valid Nigerian phone number (e.g., 08012345678)';
  }
  return '';
};

export const validateName = (name, fieldName = 'Name') => {
  if (!name) return `${fieldName} is required`;
  if (name.length < 2) return `${fieldName} must be at least 2 characters`;
  if (name.length > 50) return `${fieldName} must not exceed 50 characters`;
  if (!/^[a-zA-Z\s'-]+$/.test(name)) return `${fieldName} contains invalid characters`;
  return '';
};

export const validateAddress = (address) => {
  if (!address) return 'Address is required';
  if (address.length < 10) return 'Please enter a complete address';
  if (address.length > 200) return 'Address is too long';
  return '';
};

export const validateCity = (city) => {
  if (!city) return 'City is required';
  if (city.length < 2) return 'Please enter a valid city name';
  if (!/^[a-zA-Z\s-]+$/.test(city)) return 'City name contains invalid characters';
  return '';
};

export const validateState = (state) => {
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
    'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
    'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
    'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
    'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
  ];
  
  if (!state) return 'State is required';
  if (!nigerianStates.includes(state)) return 'Please select a valid Nigerian state';
  return '';
};

export const validatePostalCode = (postalCode) => {
  if (!postalCode) return 'Postal code is required';
  if (!/^\d{6}$/.test(postalCode)) return 'Postal code must be 6 digits';
  return '';
};

export const validateCardNumber = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!cleaned) return 'Card number is required';
  if (!/^\d{16}$/.test(cleaned)) return 'Card number must be 16 digits';
  
  // Luhn algorithm for card validation
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  if (sum % 10 !== 0) return 'Invalid card number';
  return '';
};

export const validateCVV = (cvv) => {
  if (!cvv) return 'CVV is required';
  if (!/^\d{3,4}$/.test(cvv)) return 'CVV must be 3 or 4 digits';
  return '';
};

export const validateExpiryDate = (expiry) => {
  if (!expiry) return 'Expiry date is required';
  
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryRegex.test(expiry)) return 'Format must be MM/YY';
  
  const [month, year] = expiry.split('/');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  
  const expYear = parseInt(year);
  const expMonth = parseInt(month);
  
  if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
    return 'Card has expired';
  }
  
  return '';
};

export const validateRequired = (value, fieldName = 'This field') => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} is required`;
  }
  return '';
};

// Validate entire checkout form
export const validateCheckoutForm = (formData) => {
  const errors = {};
  
  // Personal information
  errors.firstName = validateName(formData.firstName, 'First name');
  errors.lastName = validateName(formData.lastName, 'Last name');
  errors.email = validateEmail(formData.email);
  errors.phone = validatePhone(formData.phone);
  
  // Shipping address
  errors.address = validateAddress(formData.address);
  errors.city = validateCity(formData.city);
  errors.state = validateState(formData.state);
  errors.postalCode = validatePostalCode(formData.postalCode);
  
  // Payment information (if paying with card)
  if (formData.paymentMethod === 'card') {
    errors.cardNumber = validateCardNumber(formData.cardNumber || '');
    errors.cardName = validateName(formData.cardName || '', 'Cardholder name');
    errors.expiryDate = validateExpiryDate(formData.expiryDate || '');
    errors.cvv = validateCVV(formData.cvv || '');
  }
  
  // Filter out empty errors
  return Object.fromEntries(
    Object.entries(errors).filter(([, value]) => value !== '')
  );
};

// Format card number with spaces
export const formatCardNumber = (value) => {
  const cleaned = value.replace(/\s/g, '');
  const match = cleaned.match(/.{1,4}/g);
  return match ? match.join(' ') : cleaned;
};

// Format expiry date
export const formatExpiryDate = (value) => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length >= 2) {
    return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
  }
  return cleaned;
};

// Format phone number
export const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 11) {
    return cleaned;
  }
  return cleaned.slice(0, 11);
};