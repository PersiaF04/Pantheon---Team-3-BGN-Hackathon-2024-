import express from "express";

import validate from "../middlewares/validator.js";

import ArticleValidation from "../validators/article.validator.js";
import ArticleController from "../controllers/article.controller.js";

const router = express.Router();

router.post(
  "/new",
  validate(ArticleValidation.newArticle),
  ArticleController.newArticle,
);

router.get("/search", ArticleController.searchArticles);

router.get("/:id", ArticleController.getArticle);

export default router;
