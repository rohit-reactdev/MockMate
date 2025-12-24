import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../utils/axiosConfig";
import { addAnswer, setQuestions } from "../store/interviewSlice";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector(state => state.interview.role);
  const questions = useSelector(state => state.interview.questions);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch questions on mount
  useEffect(() => {
    if (!role) {
      navigate("/");
      return;
    }

    axios.post("https://mockmate-d7r1.onrender.com/api/interview/questions", { role })
      .then(res => {
        const q = res.data.questions.split("\n\n").filter(q => q.trim() !== "");
        dispatch(setQuestions(q));
      });
  }, [role, dispatch, navigate]);

  const handleSubmitAnswer = async () => {
    if (!answer.trim()) return;

    setLoading(true);

    const question = questions[currentIndex];

    const res = await axios.post("https://mockmate-d7r1.onrender.com/api/interview/evaluate", {
      question,
      answer
    });

    dispatch(addAnswer({
      answer,
      score: res.data.score,
      feedback: res.data.feedback
    }));

    setAnswer("");

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigate("/results");
    }

    setLoading(false);
  };

  if (!questions.length) return <h1 className="p-6">Loading interview...</h1>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex justify-center items-start pt-12 px-4">

      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 border border-gray-200 dark:border-gray-700">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Mock Interview
          <span className="block text-blue-600 dark:text-blue-400 text-xl mt-1 capitalize">{role} Developer</span>
        </h1>

        {/* Progress */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Question {currentIndex + 1} of {questions.length}
          </p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-blue-50 dark:bg-gray-700 border-l-4 border-blue-600 dark:border-blue-400 rounded-md p-4 mb-6">
          <h2 className="text-gray-900 dark:text-white text-lg font-semibold">
            {questions[currentIndex]}
          </h2>
        </div>

        {/* Answer Box */}
        <textarea
          className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:border-blue-500 focus:ring-blue-400 rounded-lg p-3 mb-6 outline-none transition-all shadow-sm"
          rows="6"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSubmitAnswer}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-3 rounded-lg font-semibold text-lg disabled:bg-gray-400 transition-all"
        >
          {loading ? (
            <span className="flex justify-center items-center gap-2">
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              Evaluating...
            </span>
          ) : (
            "Submit Answer"
          )}
        </button>

      </div>
    </div>
  );
}
