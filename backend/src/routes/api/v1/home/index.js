import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("<h1>Home from old me</h1>");
});

export default router;
