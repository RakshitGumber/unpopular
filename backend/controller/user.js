import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import Users from "../model/user.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(409).json({ message: "invalid credentials" });
    }
    const token = jwt.sign({ email: user.email, id: user._id }, "test", {
      expiresIn: "5h",
    });

    res.status(200).json({ user: user, token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const signupUser = async (req, res) => {
  const { email, username, password, firstName, lastName } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (user)
      return res.status(409).json({ message: "user already exists", user });

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await Users.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      username,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "5h",
    });

    res.status(200).json({ user: result, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("User not found");
  }

  const { profilepic, username, lastName, firstName } = req.body;

  try {
    const updatedFields = {};
    if (profilepic) updatedFields.profilepic = profilepic;
    if (username) updatedFields.username = username;
    if (lastName) updatedFields.lastName = lastName;
    if (firstName) updatedFields.firstName = firstName;
    const updatedUser = await Users.findByIdAndUpdate(_id, updatedFields, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).send("Post not found");
    }

    res.json(updatedUser);
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("Error updating post");
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
