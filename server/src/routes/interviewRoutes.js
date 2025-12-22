import express from "express";
import { getGroqClient } from "../config/groq.js";
import Session from "../models/Session.js";


const router = express.Router();

router.post("/questions", async (req, res) => {
  const { role } = req.body;

  try {
    const groq = getGroqClient();
    
    const prompt = `Generate 5 interview questions for a ${role} developer.`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "user", content: prompt }
      ]
    });

    res.json({ questions: response.choices[0].message.content });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to generate questions" });
  }
});

router.post("/evaluate", async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required" });
  }

  try {
    const groq = getGroqClient();

    const prompt = `
You are an expert technical interviewer.

Evaluate the candidate's answer.

Question: ${question}
Answer: ${answer}

Respond ONLY in JSON format:
{
  "score": 1-10,
  "feedback": "detailed feedback here",
  "improvements": "how they can improve"
}
`;

    const response = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }]
    });

    // ensure JSON parsing
    let result = response.choices[0].message.content.trim();
    result = JSON.parse(result);

    res.json(result);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Evaluation failed" });
  }
});

router.post("/save-session", async (req, res) => {
  const { role, questions, answers, scores, feedback } = req.body;

  try {
    const session = await Session.create({
      role,
      questions,
      answers,
      scores,
      feedback
    });

    res.json({ message: "Session saved", session });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to save session" });
  }
});

router.get("/history", async (req, res) => {
  try {
    const sessions = await Session.find().sort({ createdAt: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
});



export default router;
