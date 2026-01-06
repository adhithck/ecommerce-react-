import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // 🔑 STORE TOKEN
      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
      <div className="bg-black p-6 rounded-xl w-80">
        <h2 className="text-lg font-bold mb-4">Login</h2>

        <input
          className="w-full mb-2 p-2 rounded bg-gray-900"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 rounded bg-gray-900"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">
            {error}
          </p>
        )}

        <button
          onClick={submit}
          className="w-full bg-yellow-400 text-black py-2 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
