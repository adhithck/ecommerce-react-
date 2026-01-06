import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <nav className="space-y-4">
          <Link
            to="/admin/add-product"
            className="block hover:text-yellow-400"
          >
            ➕ Add Product
          </Link>

          <Link
            to="/admin/products"
            className="block hover:text-yellow-400"
          >
            📦 Manage Products
          </Link>

          <Link
            to="/admin/orders"
            className="block hover:text-yellow-400"
          >
            📑 Manage Orders
          </Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>

    </div>
  );
}
