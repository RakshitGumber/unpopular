import { connect } from "mongoose";

const connection = async () => {
  try {
    if (process.env.MONGO_URI === undefined)
      throw new Error("Missing MONGO_URI environment variable");

    connect(process.env.MONGO_URI);
  } catch (error: Error | any) {
    console.log(error.message ?? error);
  }
};

export default connection;
