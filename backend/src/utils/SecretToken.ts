import jwt from "jsonwebtoken";

export const createSecretToken = (id: string) => {
  if (process.env.JSON_SECRET === undefined)
    throw new Error("Missing variable JSON_SECRET");

  return jwt.sign({ id }, process.env.JSON_SECRET, { expiresIn: "3d" });
};
