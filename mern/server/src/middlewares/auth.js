import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { JWT_SECRET } from "../utils/env.js";

const auth = async (req, res, next) => {
  if (!req.header("Authorization")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = req.header("Authorization").split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default auth;
