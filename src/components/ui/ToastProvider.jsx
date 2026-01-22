import React, { useState, useCallback, useMemo } from 'react';
import { X, CheckCircle, AlertCircle, Info, ShoppingCart, Heart } from 'lucide-react';
import { ToastContext } from './ToastContext';

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = Date.now();
    const newToast = { id, message, type, duration };
    
    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, [removeToast]);

  const toast = useMemo(() => ({
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    info: (message, duration) => addToast(message, 'info', duration),
    cart: (message, duration) => addToast(message, 'cart', duration),
    wishlist: (message, duration) => addToast(message, 'wishlist', duration),
  }), [addToast]);
  
  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-20 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const Toast = ({ toast, onClose }) => {
  const { message, type } = toast;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50 border-green-200',
          icon: <CheckCircle className="text-green-600" size={20} />,
          text: 'text-green-800',
        };
      case 'error':
        return {
          bg: 'bg-red-50 border-red-200',
          icon: <AlertCircle className="text-red-600" size={20} />,
          text: 'text-red-800',
        };
      case 'info':
        return {
          bg: 'bg-blue-50 border-blue-200',
          icon: <Info className="text-blue-600" size={20} />,
          text: 'text-blue-800',
        };
      case 'cart':
        return {
          bg: 'bg-yellow-50 border-yellow-300',
          icon: <ShoppingCart className="text-yellow-800" size={20} />,
          text: 'text-yellow-900',
        };
      case 'wishlist':
        return {
          bg: 'bg-pink-50 border-pink-200',
          icon: <Heart className="text-pink-600" size={20} />,
          text: 'text-pink-800',
        };
      default:
        return {
          bg: 'bg-gray-50 border-gray-200',
          icon: <Info className="text-gray-600" size={20} />,
          text: 'text-gray-800',
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      className={`${styles.bg} border ${styles.text} px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] max-w-md pointer-events-auto animate-slideInRight`}
      role="alert"
    >
      {styles.icon}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close notification"
      >
        <X size={18} />
      </button>
    </div>
  );
};