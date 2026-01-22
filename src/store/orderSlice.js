import { createSlice } from '@reduxjs/toolkit';

// Load orders from localStorage
const loadOrdersFromStorage = () => {
  try {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  } catch (error) {
    console.error('Error loading orders from localStorage:', error);
    return [];
  }
};

// Save orders to localStorage
const saveOrdersToStorage = (orders) => {
  try {
    localStorage.setItem('orders', JSON.stringify(orders));
  } catch (error) {
    console.error('Error saving orders to localStorage:', error);
  }
};

const initialState = {
  orders: loadOrdersFromStorage(),
  currentOrder: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const newOrder = {
        id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        ...action.payload,
        orderDate: new Date().toISOString(),
        status: 'pending',
        trackingNumber: `TRK-${Date.now()}`,
      };
      
      state.orders.unshift(newOrder);
      state.currentOrder = newOrder;
      saveOrdersToStorage(state.orders);
    },
    
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      
      if (order) {
        order.status = status;
        order.lastUpdated = new Date().toISOString();
        saveOrdersToStorage(state.orders);
      }
    },
    
    cancelOrder: (state, action) => {
      const order = state.orders.find(o => o.id === action.payload);
      
      if (order && order.status === 'pending') {
        order.status = 'cancelled';
        order.cancelledDate = new Date().toISOString();
        saveOrdersToStorage(state.orders);
      }
    },
    
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    
    clearCurrentOrder: (state) => {
      state.currentOrder = null;
    },
  }
});

export const { 
  createOrder, 
  updateOrderStatus, 
  cancelOrder,
  setCurrentOrder,
  clearCurrentOrder 
} = orderSlice.actions;

export default orderSlice.reducer;