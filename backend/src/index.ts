import { connection } from "./db";
import server from "./server";

Promise.all([connection()])
  .then(() => {
    console.log("Server connected to Database successfully");
  })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Server started on http://localhost:${process.env.PORT}`);
    });
  });
