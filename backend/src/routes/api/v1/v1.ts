import { Router } from "express";
import home from "./home";
import user from "./user";
import posts from "./post";

const router = Router();

router.use("/", home);
router.use("/user", user);
router.use("/posts", posts);

export default router;
