import { Request, Response } from "express";
import Post from "../models/postModel";

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching posts." });
  }
};

const createPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
    });
    res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: "Error creating post." });
  }
};

const updatePost = async (req: Request, res: Response) => {
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
    return res.status(500).json({ error: "Error updating post." });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(400);
      throw new Error("Post not found");
    }
    await Post.deleteOne();
    res.status(204).json({ id: req.params.id });
  } catch (error) {}
};

export { getPosts, createPost, updatePost, deletePost };
