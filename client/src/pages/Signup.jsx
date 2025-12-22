import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../utils/axiosConfig";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border p-3 rounded dark:bg-gray-700 dark:border-gray-600"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Sign Up
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link className="text-blue-600 dark:text-blue-400" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
