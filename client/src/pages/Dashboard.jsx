import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  // later we will fetch user details via 
  // 
  const token = useSelector(state => state.auth.token);

  if (!token) {
    return <Navigate to="/login" />;
  }
  
  const user = {
    name: "John Doe",
    email: "john@example.com"
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white p-8">

      <h1 className="text-3xl font-bold mb-6">
        Welcome, <span className="text-blue-600">{user.name}</span>
      </h1>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h2 className="text-lg font-semibold">Completed Interviews</h2>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h2 className="text-lg font-semibold">Average Score</h2>
          <p className="text-3xl font-bold mt-2">82%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border dark:border-gray-700">
          <h2 className="text-lg font-semibold">Best Performance</h2>
          <p className="text-3xl font-bold mt-2">91%</p>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">

        <Link
          to="/start"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
        >
          Start Interview
        </Link>

        <Link
          to="/history"
          className="px-6 py-3 bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 rounded-lg text-gray-800 dark:text-white font-semibold"
        >
          View History
        </Link>

      </div>

    </div>
  );
}
