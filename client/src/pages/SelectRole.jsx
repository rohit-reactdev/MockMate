import { useDispatch } from "react-redux";
import { setRole } from "../store/interviewSlice";
import { useNavigate } from "react-router-dom";

export default function SelectRole() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    dispatch(setRole(role));
    navigate("/interview");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex justify-center items-center px-4">

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-10 max-w-lg w-full text-center">

        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          MockMate
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Sharpen your interview skills with AI-powered mock interviews.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Select Your Role
        </h2>

        <div className="flex flex-col gap-4">

          <button
            onClick={() => handleSelectRole("Frontend")}
            className="py-3 px-6 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white text-lg rounded-lg shadow-sm transition-transform hover:scale-[1.02]"
          >
            Frontend Developer
          </button>

          <button
            onClick={() => handleSelectRole("Backend")}
            className="py-3 px-6 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white text-lg rounded-lg shadow-sm transition-transform hover:scale-[1.02]"
          >
            Backend Developer
          </button>

          <button
            onClick={() => handleSelectRole("Fullstack")}
            className="py-3 px-6 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white text-lg rounded-lg shadow-sm transition-transform hover:scale-[1.02]"
          >
            Full Stack Developer
          </button>

        </div>
      </div>
    </div>
  );
}
