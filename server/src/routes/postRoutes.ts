import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postController2";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/", auth, getPosts);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
