import express from "express";

import validate from "../middlewares/validator.js";

import VideoValidation from "../validators/video.validator.js";
import VideoController from "../controllers/video.controller.js";

const router = express.Router();

router.post(
  "/new",
  validate(VideoValidation.newVideo),
  VideoController.addVideo,
);

router.get("/search", VideoController.searchVideos);

router.get("/:videoId", VideoController.getVideo);

export default router;
