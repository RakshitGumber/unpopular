import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).send("<h1>Home</h1>");
});

export default router;
