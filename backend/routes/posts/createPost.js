import Posts from "../../model/posts.js";
import Users from "../../model/user.js";

export default async (req, res) => {
  const post = req.body;
  const user = await Users.findById(req.userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newPost = new Posts({
    ...post,
    creator: req.userId,
    name: user.name,

    createdAt: new Date().toISOString(),
  });
  try {
    await newPost.save();
    res.status(201).json({ message: "post created successfuly" });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
