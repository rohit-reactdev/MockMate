import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
  name: "interview",
  initialState: {
    role: "",
    questions: [],
    answers: [],
    scores: [],
    feedback: []
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addAnswer: (state, action) => {
      state.answers.push(action.payload.answer);
      state.scores.push(action.payload.score);
      state.feedback.push(action.payload.feedback);
    },
    resetInterview: (state) => {
      state.role = "";
      state.questions = [];
      state.answers = [];
      state.scores = [];
      state.feedback = [];
    }
  }
});

export const { setRole, setQuestions, addAnswer, resetInterview } = interviewSlice.actions;

export default interviewSlice.reducer;
