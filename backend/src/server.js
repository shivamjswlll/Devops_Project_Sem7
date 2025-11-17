import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";


import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://codechat-frontend-4r2f.onrender.com",   // ← Add your Render frontend URL
    "http://localhost:3000"
  ],
  credentials: true,
}));


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);



// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
