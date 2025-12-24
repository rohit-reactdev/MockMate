import { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";

export default function History() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get("https://mockmate-d7r1.onrender.com/api/interview/history")
      .then(res => setSessions(res.data));
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Interview History</h1>

      {sessions.map((session, index) => (
        <div key={index} className="border p-4 mb-4 rounded-md">
          <p><strong>Role:</strong> {session.role}</p>
          <p><strong>Date:</strong> {new Date(session.createdAt).toLocaleString()}</p>
          <p><strong>Total Questions:</strong> {session.questions.length}</p>
          <p><strong>Scores:</strong> {session.scores.join(", ")}</p>
        </div>
      ))}

      <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded-md block text-center mt-6">
        Back Home
      </a>
    </div>
  );
}
