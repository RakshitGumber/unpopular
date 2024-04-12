import { Router } from "express";
import { loginUser, signupUser } from "../../controller/user.js";

const router = Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);

export default router;
