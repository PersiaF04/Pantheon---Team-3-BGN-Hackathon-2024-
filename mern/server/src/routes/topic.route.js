import express from "express";

import authenticate from "../middlewares/auth.js";
import validate from "../middlewares/validator.js";

import TopicValidation from "../validators/topic.validator.js";
import TopicController from "../controllers/topic.controller.js";

const router = express.Router();

router.post(
  "/new",
  validate(TopicValidation.newTopic),
  authenticate,
  TopicController.createTopic,
);

router.get("/search", TopicController.searchTopics);

router.get("/:topicId", TopicController.getTopic);

export default router;
