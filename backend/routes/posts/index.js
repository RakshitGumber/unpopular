import { Router } from "express";
import getPosts from "./getPosts.js";
import createPost from "./createPost.js";

const router = Router();

router.get("/", getPosts).post("/", createPost);

export default router;
