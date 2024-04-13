import { Router } from "express";
import getPosts from "./getPosts.js";
import createPost from "./createPost.js";
import {
  getPostsBySearch,
  updatePost,
  deletePost,
  likePost,
  getPost,commentPost
} from "../../controller/posts.js";
import authenticate from "../../middleware/authenticate.js";

const router = Router();

router
  .get("/", getPosts)
  .get("/search", getPostsBySearch)
  .post("/", authenticate, createPost)
  .patch("/:id", authenticate, updatePost)
  .delete("/:id", authenticate, deletePost)
  .patch("/:id/likePost", authenticate, likePost)
  .get("/:id", getPost)
  .post("/:id/comment", authenticate, commentPost);

export default router;
