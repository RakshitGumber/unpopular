import { Schema, model } from "mongoose";

const postSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  name: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  tags: [String],
  selectedFile: { type: String },
  comments: { type: [String], default: [] },
  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Posts = model("Posts", postSchema);

export default Posts;
