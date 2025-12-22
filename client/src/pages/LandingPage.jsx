import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
       

        <div className="flex gap-4">
          {/* <Link 
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link 
            to="/signup"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Signup
          </Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-48 px-6">

        <h2 className="text-5xl font-extrabold tracking-tight mb-6">
          Ace Your Next Interview
        </h2>

        <p className="text-xl max-w-2xl text-gray-700 dark:text-gray-300 mb-8">
          AI-driven mock interview platform to help you practice, improve, and succeed.
        </p>

        {/* Features */}
      <section className="mt-24 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2">🎯 AI-Driven Questions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get tailored interview questions for your role, experience, and tech stack.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2">🧠 Smart Evaluation</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Receive detailed scoring & feedback so you know exactly where to improve.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-2">📊 Track Progress</h2>
          <p className="text-gray-600 dark:text-gray-300">
            View history, repeated interviews & score improvements over time.
          </p>
        </div>

      </section>

        {/* <Link
          to="/start"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105"
        >
          Start Interview
        </Link> */}
      </section>
    </div>
  );
}
