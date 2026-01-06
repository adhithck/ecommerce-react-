import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#020617] border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-wide text-gray-200"
        >
          Dark<span className="text-yellow-400">.</span>Cart
        </Link>

        {/* Search */}
        <input
          className="flex-1 bg-black border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400"
          placeholder="Search products..."
        />

        {/* Actions */}
        <nav className="flex items-center gap-4 text-sm">
          {/* Orders & Returns */}
          {token && (
            <Link to="/orders" className="text-gray-300 hover:text-yellow-400">
              Orders & Returns
            </Link>
          )}

          {/* Quick Checkout */}
          {token && (
            <Link
              to="/checkout"
              className="text-gray-300 hover:text-yellow-400"
            >
              Quick Checkout
            </Link>
          )}

          {/* Auth */}
          {!token ? (
            <Link
              to="/login"
              className="border border-yellow-400 px-4 py-1.5 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={logout}
              className="border border-red-400 px-4 py-1.5 rounded-full text-red-400 hover:bg-red-400 hover:text-black transition"
            >
              Logout
            </button>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="border border-gray-700 px-4 py-1.5 rounded-full text-gray-200 hover:border-yellow-400"
          >
            🛒 Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
