import express from "express";
import { model } from "../config/gemini.js";

const router = express.Router();

router.post("/questions", async (req, res) => {
  const { role } = req.body;

  try {
    const prompt = `Generate 5 interview questions for a ${role} developer. Return as bullet points.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.json({ questions: response.text() });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to generate questions" });
  }
});

export default router;
