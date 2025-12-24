import { useSelector, useDispatch } from "react-redux";
import axios from "../utils/axiosConfig";
import { useEffect, useState } from "react";
import { resetInterview } from "../store/interviewSlice";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const { role, questions, answers, scores, feedback } = useSelector(state => state.interview);

  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!saved) {
      axios.post("https://mockmate-d7r1.onrender.com/api/interview/save-session", {
        role,
        questions,
        answers,
        scores,
        feedback
      }).then(() => setSaved(true));
    }
  }, [saved, role, questions, answers, scores, feedback]);

  const handleTryAgain = () => {
    dispatch(resetInterview());
    navigate("/");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Results</h1>

      {scores.map((s, i) => (
        <div key={i} className="border p-4 mb-4 rounded-md">
          <p><strong>Score:</strong> {s}/10</p>
          <p className="mt-2"><strong>Feedback:</strong> {feedback[i]}</p>
        </div>
      ))}

      <button
        onClick={handleTryAgain}
        className="bg-green-600 text-white px-4 py-2 rounded-md block text-center mt-6"
      >
        Try Again
      </button>

      <a
        href="/history"
        className="bg-gray-700 text-white px-4 py-2 rounded-md block text-center mt-4"
      >
        View History
      </a>
    </div>
  );
}
