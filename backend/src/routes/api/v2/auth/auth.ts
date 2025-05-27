import Router from "express";
import signup from "./signup.ts";
import login from "./login.ts";

const router = Router();

router.post("/signup", signup).post("/login", login);

export default router;
