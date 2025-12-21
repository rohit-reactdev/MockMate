import express from "express";
import cors from "cors";
import interviewRoutes from "./routes/interviewRoutes.js"; // <-- ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MockMate Backend is running");
});

// <-- REGISTER ROUTE
app.use("/api/interview", interviewRoutes);

export default app;
