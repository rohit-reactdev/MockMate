import { configureStore } from "@reduxjs/toolkit";
import interviewReducer from "./interviewSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    interview: interviewReducer
  }
});

export default store;
