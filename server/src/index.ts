import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

connectDB();

const port = process.env.PORT || 3000;

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-ts-auth.netlify.app",
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // if (allowedOrigins.includes(origin!)) {
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
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
