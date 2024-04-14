import mongoose from "mongoose";
import { config } from "dotenv";

const connectDb = async () => {
  // await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI || config().parsed.MONGO_URI);
};

export default connectDb;
