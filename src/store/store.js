import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import orderReducer from './orderSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
     auth: authReducer,
     order: orderReducer,
  }
});