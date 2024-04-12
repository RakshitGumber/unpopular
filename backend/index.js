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

// routes
app.use("/", home);
app.use("/posts", posts);
app.use("/user", user);

Promise.all([connectDB()]).then(() => {
  console.log("Connected to the Database");
  app.listen(process.env.PORT, () => {
    console.log(
      "\nServer Started at port: " +
        process.env.PORT +
        "\n\nTo connect to the server go to:\nhttp://localhost:" +
        process.env.PORT
    );
  });
});
