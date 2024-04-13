import { Schema, model } from "mongoose";

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  username: { type: String, required: true },
  profilePic: { type: String },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  friends: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  friendRequest: [
    {
      sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
});

export default model("Users", userSchema);
