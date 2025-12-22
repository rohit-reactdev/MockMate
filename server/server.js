import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { getGroqClient } from "./src/config/groq.js";
import { connectDB } from "./src/config/db.js";
import interviewRoutes from "./src/routes/interviewRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import { auth } from "./src/middleware/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/api/protected", auth, (req, res) => {
  res.json({ message: "Authorized", user: req.user });
});

// Debug Logs
console.log("Loaded GROQ_API_KEY:", process.env.GROQ_API_KEY);
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// Connect DB
connectDB();

// Routes
app.use("/api/interview", interviewRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// const groq = getGroqClient();

// groq.models.list().then(models => {
//   console.log("AVAILABLE GROQ MODELS:", models);
// }).catch(console.error);
