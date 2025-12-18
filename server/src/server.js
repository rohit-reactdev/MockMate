import app from "./app.js";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
    

const PORT = process.env.PORT || 5000;

// connect to db
connectDB();

app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
  console.log("Loaded MONGO_URI:", process.env.MONGO_URI);
});
