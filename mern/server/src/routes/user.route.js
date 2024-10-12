import express from "express";

import auth from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import UserValidation from "../validations/user.validation.js";

import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", UserController.googleSignOn);

router.post(
  /comment/,
  validate(UserValidation.newComment),
  UserController.newComment,
);

export default router;
