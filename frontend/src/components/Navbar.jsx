import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // ⬅ backend user

  const logoutHandler = () => {
    localStorage.removeItem("token"); // ⬅ backend token
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 text-white px-6 py-3 flex items-center gap-6">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        amazon
      </Link>

      {/* Search */}
      <input
        className="flex-1 px-4 py-2 rounded text-black"
        placeholder="Search products"
      />

      {/* Links */}
      <nav className="flex items-center gap-4">
        <Link to="/cart">Cart</Link>

        {user ? (
          <>
            {user.role === "admin" && (
              <Link to="/admin">Admin</Link>
            )}

            <button
              onClick={logoutHandler}
              className="bg-yellow-400 text-black px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
