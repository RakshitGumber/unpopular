import { Router } from "express";
import {
  loginUser,
  signupUser,
  getUser,
  updateUser,
} from "../../controller/user.js";

const router = Router();

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.get("/:id", getUser).patch("/:id", updateUser);

export default router;
