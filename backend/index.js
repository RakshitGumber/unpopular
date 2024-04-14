import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db/index.js";
import cors from "cors";
import posts from "./routes/posts/index.js";
import home from "./routes/home/index.js";
import user from "./routes/user/index.js";
const app = express();

// middleWares
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", home);
app.use("/posts", posts);
app.use("/user", user);

const PORT = process.env.PORT || 8080;

Promise.all([connectDB()]).then(() => {
  console.log("Connected to the Database");
  app.listen(PORT, () => {
    console.log(
      "\nServer Started at port: " +
        PORT +
        "\n\nTo connect to the server go to:\nhttp://localhost:" +
        PORT
    );
  });
});
