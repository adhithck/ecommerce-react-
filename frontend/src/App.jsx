import { Routes, Route } from "react-router-dom";

/* ===== AUTH PAGES ===== */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

/* ===== USER PAGES ===== */
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";

/* ===== ADMIN PAGES ===== */
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProducts";
import EditProduct from "./pages/admin/EditProduct";
import ManageOrders from "./pages/admin/ManageOrders";

/* ===== ROUTE PROTECTION ===== */
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* ================= AUTH ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= USER ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/order"
        element={
          <ProtectedRoute>
            <Order />
          </ProtectedRoute>
        }
      />

      {/* ================= ADMIN ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="products" element={<ManageProducts />} />
        <Route path="edit/:id" element={<EditProduct />} />
        <Route path="orders" element={<ManageOrders />} />
      </Route>
    </Routes>
  );
}
