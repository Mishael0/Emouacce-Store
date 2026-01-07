import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DealsPage from "./pages/DealsPage";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/deals" element={<DealsPage />} />

          <Route path="/products/:category" element={<CategoryPage />} />

            <Route path="/products/:category/:subCategory" element={<CategoryPage />} />

             <Route path="/products/:category/:subcategory/:productId" element={<ProductDetailPage />} />

              <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
