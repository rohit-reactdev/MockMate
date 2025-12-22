import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-transparent absolute w-full top-0">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-500">
        MockMate
      </Link>

      {/* Right Menu */}
      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="text-gray-200 hover:text-blue-400 transition"
        >
          Home
        </Link>

        <Link
          to="/history"
          className="text-gray-200 hover:text-blue-400 transition"
        >
          History
        </Link>

        <ThemeToggle />

        {/* Auth-based navigation */}
        {token ? (
          <>
            <Link
              to="/dashboard"
              className="text-gray-200 hover:text-blue-400 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
