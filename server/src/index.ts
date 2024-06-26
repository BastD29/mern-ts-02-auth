import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";

connectDB();

const port = process.env.PORT || 3000;

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  // "https://mern-ts-auth.netlify.app",
  "https://mern-ts-token-based-auth-with-crud.netlify.app",
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      origin.includes("Postman") ||
      allowedOrigins.includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
