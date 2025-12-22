import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-lg bg-white/10 dark:bg-gray-900/30
        border-b border-gray-300/20 dark:border-gray-700/40
        py-4 px-8 flex justify-between items-center
      "
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 dark:text-blue-400 select-none"
      >
        MockMate
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        <Link
          to="/"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
        >
          Home
        </Link>

        {token && (
          <Link
            to="/history"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            History
          </Link>
        )}

        <ThemeToggle />

        {token ? (
          <>
            {/* Display user initial OR name */}
            <span className="hidden md:inline text-gray-700 dark:text-gray-200 font-medium">
              Hi, <span className="text-blue-600 dark:text-blue-400">{user?.name}</span>
            </span>

            <Link
              to="/dashboard"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition shadow"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
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
