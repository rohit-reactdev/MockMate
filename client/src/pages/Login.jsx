import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "../utils/axiosConfig";
import { loginSuccess } from "../store/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post("https://mockmate-d7r1.onrender.com/api/auth/login", {
        email,
        password,
      });

      // Save in Redux + localStorage
      dispatch(loginSuccess(res.data));

      // Redirect
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

     const res = await axios.post("/auth/login", {
    email,
    password
  });

      dispatch(loginSuccess(res.data));
      navigate("/dashboard");
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Login
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link className="text-blue-600 dark:text-blue-400" to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
