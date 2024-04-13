import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    return res.status(500).json({ message: error.message });
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

export const updateUser = async (req, res) => {};
