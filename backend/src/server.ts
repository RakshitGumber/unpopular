import express from "express"; //   type Response, //   type Request, //   type NextFunction,
import { config } from "dotenv";
import bodyParser from "body-parser";
import { router } from "./routes";
// import { imageUpload } from "./lib/upload";
// import type { Error } from "mongoose";
// import { fileURLToPath } from "url";
// import path from "path";

config();

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "public", "client")));
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use(router);

// router.post(
//   "/uploadImage",
//   imageUpload.single("image"),
//   (req: Request, res: Response) => {
//     res.send(req.file);
//   },
//   (error: Error, req: Request, res: Response, next: NextFunction) => {
//     res.status(400).send({ error: error.message });
//   }
// );
// router.post(
//   "/uploadBulkImage",
//   imageUpload.array("image", 7),
//   (req: Request, res: Response) => {
//     res.send(req.file);
//   },
//   (error: Error, req: Request, res: Response, next: NextFunction) => {
//     res.status(400).send({ error: error.message });
//   }
// );

export default app;
