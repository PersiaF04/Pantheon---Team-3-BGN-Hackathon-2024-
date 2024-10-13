import Joi from "joi";

// POST /v1/articles/new
const newArticle = Joi.object().keys({
  title: Joi.string().required(),
  url: Joi.string().required(),
  description: Joi.string().required(),
  thumbnail: Joi.string().required(),
});

// GET /v1/articles/search?keyword=keyword

// GET /v1/articles/:id

export default {
  newArticle,
};
