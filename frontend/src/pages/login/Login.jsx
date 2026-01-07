import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slice/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((s) => s.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser(form));
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
      <div className="w-full max-w-sm bg-black border border-gray-800 rounded-2xl p-6 text-gray-200 shadow-xl">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-center mb-1">
          Dark<span className="text-yellow-400">.</span>Cart
        </h1>
        <p className="text-center text-xs text-gray-500 mb-6">
          Welcome back
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="w-full bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 transition"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400 transition"
          />

          {/* Error */}
          {error && (
            <p className="text-red-400 text-xs">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition disabled:opacity-60"
          >
            {status === "loading" ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
