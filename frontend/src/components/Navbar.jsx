// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../store/slice/authSlice";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const { isAuthenticated } = useSelector((s) => s.auth);

//   return (
//     <header className="flex justify-between items-center px-6 py-4 bg-[#020617] border-b border-gray-800">
//       <Link to="/" className="text-xl font-bold text-gray-200">
//         Dark<span className="text-yellow-400">.</span>Cart
//       </Link>

//       <nav className="flex gap-4 text-sm">
//         {isAuthenticated ? (
//           <>
//             <Link to="/orders">Orders</Link>
//             <Link to="/checkout">Checkout</Link>
//             <button onClick={() => dispatch(logout())} className="text-red-400">
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/login" className="text-yellow-400">
//             Login
//           </Link>
//         )}

//         <Link to="/cart">Cart</Link>
//       </nav>
//     </header>
//   );
// }
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((s) => s.auth);

  return (
    <header className="sticky top-0 z-50 bg-[#020617] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-wide text-gray-100"
        >
          Dark<span className="text-yellow-400">.</span>Cart
        </Link>

        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-black border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
          />
        </div>

        {/* Right Actions */}
        <nav className="flex items-center gap-5 text-sm text-gray-300">
          {isAuthenticated && (
            <>
              <Link to="/orders" className="hover:text-yellow-400 transition">
                Orders & Returns
              </Link>

              <Link to="/checkout" className="hover:text-yellow-400 transition">
                Quick Checkout
              </Link>
            </>
          )}

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="border border-yellow-400 text-yellow-400 px-4 py-1.5 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => dispatch(logout())}
              className="border border-red-400 text-red-400 px-4 py-1.5 rounded-full hover:bg-red-400 hover:text-black transition"
            >
              Logout
            </button>
          )}

          {/* Cart */}
          <Link
            to="/cart"
            className="relative border border-gray-700 px-4 py-1.5 rounded-full hover:border-yellow-400 transition"
          >
            🛒 Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
