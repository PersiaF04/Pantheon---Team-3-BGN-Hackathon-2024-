import express from "express";

import authenticate from "../middlewares/auth.js";
import validate from "../middlewares/validator.js";

import UserValidation from "../validators/user.validator.js";
import UserController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", UserController.googleSignOn);

router.post(
  /comment/,
  validate(UserValidation.newComment),
  authenticate,
  UserController.commentOnTopic,
);

export default router;
