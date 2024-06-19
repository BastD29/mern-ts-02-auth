import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

connectDB();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
