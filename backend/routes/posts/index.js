import { Router } from "express";
import getPosts from "./getPosts.js";
import createPost from "./createPost.js";
import { updatePost, deletePost, likePost } from "../../controller/posts.js";
import authenticate from "../../middleware/authenticate.js";

const router = Router();

router
  .get("/", getPosts)
  .post("/", authenticate, createPost)
  .patch("/:id", authenticate, updatePost)
  .delete("/:id", authenticate, deletePost)
  .patch("/:id/likePost", authenticate, likePost);

export default router;
