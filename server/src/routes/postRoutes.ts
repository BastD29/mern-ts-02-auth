import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postController";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/posts", auth, getPosts);
router.post("/posts", auth, createPost);
router.put("/posts/:id", auth, updatePost);
router.delete("/posts/:id", auth, deletePost);

export default router;
