import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config";

// User schema with google auth
const userSchema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      googleId: this.googleId,
      displayName: this.displayName,
      firstName: this.firstName,
      lastName: this.lastName,
      image: this.image,
    },
    JWT_SECRET,
  );
};

export default model("User", userSchema);
