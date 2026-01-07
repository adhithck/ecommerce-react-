import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
      <div className="w-full max-w-sm bg-black border border-gray-800 rounded-2xl p-6 text-gray-200 shadow-xl">
        
        <h1 className="text-2xl font-extrabold text-center mb-1">
          Create account
        </h1>
        <p className="text-center text-xs text-gray-500 mb-6">
          Join DarkCart today
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            required
            className="w-full bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            className="w-full bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
          />

          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
          />

          {error && (
            <p className="text-red-400 text-xs">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
