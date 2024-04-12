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
    type: String,
    required: true,
  },
  tags: [String],
  selectedFile: { type: String },

  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Posts = model("Posts", postSchema);

export default Posts;
