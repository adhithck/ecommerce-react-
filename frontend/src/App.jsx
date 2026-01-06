import { Routes, Route } from "react-router-dom";

import Home from "./pages/homelist/home";
import Product from "./pages/productlist/product";
import Cart from "./pages/cartlist/cart";
import Order from "./pages/checkoutlist/Checkout";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />   {/* ✅ ADD THIS */}
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Order />} />
    </Routes>
  );
}
