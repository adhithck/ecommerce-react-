import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center gap-6 px-6 py-4 border-b border-gray-800 bg-[#020617]">
      <h1 className="text-xl font-extrabold text-gray-200">
        Dark<span className="text-yellow-400">.</span>Cart
      </h1>

      <input
        className="flex-1 bg-black border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-200"
        placeholder="Search products..."
      />

      <Link
        to="/cart"
        className="border border-yellow-400 px-4 py-2 rounded-full text-gray-200"
      >
        🛒 Cart
      </Link>
    </header>
  );
}
