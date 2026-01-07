import { Routes, Route } from "react-router-dom";

import Home from "../pages/homelist/home";
import Product from "../pages/productlist/product";
import Cart from "../pages/cartlist/cart";
import Checkout from "../pages/checkoutlist/Checkout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
