import { Response } from "express";
import { CustomRequest } from "../middleware/auth";
import Post from "../models/postModel";

const getPosts = async (req: CustomRequest, res: Response) => {
  try {
    const posts = await Post.find({ author: req.user?._id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts." });
  }
};

const createPost = async (req: CustomRequest, res: Response) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      author: req.user?._id,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error creating post." });
  }
};

const updatePost = async (req: CustomRequest, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(400);
      throw new Error("Post not found");
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Error updating post." });
  }
};

const deletePost = async (req: CustomRequest, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(400);
      throw new Error("Post not found");
    }
    await post.deleteOne();
    // res.status(204).json({ id: req.params.id });
    // res.status(204).json({ message: "Post deleted successfully" });
    // res.status(204).send();
    res
      .status(200)
      .json({ message: `Post with id ${req.params.id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: "Error deleting post." });
  }
};

export { getPosts, createPost, updatePost, deletePost };
