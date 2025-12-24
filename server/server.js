import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./src/config/db.js";
import interviewRoutes from "./src/routes/interviewRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import { auth } from "./src/middleware/auth.js";

const app = express();

app.use(
  cors({
    origin: "https://mockmate.officialrohityadav0108.workers.dev",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

// 🔥 IMPORTANT: handle preflight properly
app.options("/api/*", cors());



app.use(express.json());


console.log("Loaded GROQ_API_KEY:", !!process.env.GROQ_API_KEY);
console.log("Loaded MONGO_URI:", !!process.env.MONGO_URI);


app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRoutes);

app.get("/api/protected", auth, (req, res) => {
  res.json({ message: "Authorized", user: req.user });
});


app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "MockMate backend is healthy",
    uptime: process.uptime(),
  });
});


connectDB();


const PORT = process.env.PORT || 10000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
