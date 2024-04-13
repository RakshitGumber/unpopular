import mongoose from "mongoose";
import Posts from "../model/posts.js";

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Post not found");
  }

  const { title, message, creator, tags, selectedFile, likeCount, createdAt } =
    req.body;

  try {
    const updatedFields = {};
    if (title) updatedFields.title = title;
    if (message) updatedFields.message = message;
    if (tags) updatedFields.tags = tags;
    if (selectedFile) updatedFields.selectedFile = selectedFile;
    if (likeCount) updatedFields.likeCount = likeCount;
    if (createdAt) updatedFields.createdAt = createdAt;
    const updatedPost = await Posts.findByIdAndUpdate(_id, updatedFields, {
      new: true,
    });

    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }

    res.json(updatedPost);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("Error updating post");
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  // Check if the provided ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Post not found");
  }

  try {
    // Find the post by ID and remove it
    const deletedPost = await Posts.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).send("Post not found");
    }

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("Error deleting post");
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Post not found");
  }

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  const post = await Posts.findById(id);
  const index = post.likes.findIndex((id) => id === req.userId);

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await Posts.findByIdAndUpdate(id, post, { new: true });
  res.json(updatedPost);
};

export const getPostsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await Posts.find({
      title,
    });

    res.status(200).json({ data: posts });
  } catch (error) {
    console.error(error);
    res.status(404).send("Error getting that post");
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Posts.findById(id);
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error });
  }
};

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await Posts.findById(id);

  post.comments.push(value);

  const updatedPost = await Posts.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};
