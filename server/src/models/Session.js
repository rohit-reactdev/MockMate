import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  role: { type: String, required: true },
  questions: { type: [String], required: true },
  answers: { type: [String], required: true },
  scores: { type: [Number], required: true },
  feedback: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
