import { Router } from "express";
import { auth } from "./auth";

const router = Router();

router.use("/auth", auth);
// .use("/posts");

export default router;
