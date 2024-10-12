import Joi from "joi";

// POST /api/articles/new
const newArticle = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    url: Joi.string().required(),
    description: Joi.string().required(),
    thumbnail: Joi.string().required(),
  }),
};

// GET /api/articles/search?keyword=keyword

// GET /api/articles/:id

export default {
  newArticle,
};
