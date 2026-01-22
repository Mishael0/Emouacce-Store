import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/ui/ToastProvider";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DealsPage from "./pages/DealsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AllProductsPage from "./pages/AllProductsPage"; 
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <ToastProvider>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/deals" element={<DealsPage />} />
         <Route path="/wishlist" element={<WishlistPage />} />

        {/* Search Route */}
        <Route path="/search" element={<SearchResultsPage />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />

         {/* Order Routes */}
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/account/orders" element={<OrderHistoryPage />} />
          <Route path="/account/orders/:orderId" element={<OrderDetailsPage />} />
        
        {/* All Products Route */}
        <Route path="/products/all" element={<AllProductsPage />} />
        
        {/* Category Routes */}
        <Route path="/products/:category/:subcategory/:productId" element={<ProductDetailPage />} />
        <Route path="/products/:category/:subcategory" element={<CategoryPage />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        
        
        {/* 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
     </ToastProvider>
  );
}

export default App;