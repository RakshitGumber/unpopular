import Posts from "../../model/posts.js";

export default async (req, res) => {
  const post = req.body;
  const newPost = new Posts({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json({ message: "post created successfuly" });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
