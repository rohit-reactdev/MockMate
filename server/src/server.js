import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import { connectDB } from "./src/config/db.js";
import interviewRoutes from "./src/routes/interviewRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// TEST LOGS
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
console.log("Loaded GEMINI_API_KEY:", process.env.GEMINI_API_KEY);

// connect to database
connectDB();

// routes
app.use("/api/interview", interviewRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
