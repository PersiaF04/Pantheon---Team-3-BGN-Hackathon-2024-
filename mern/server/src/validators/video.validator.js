import Joi from "joi";

// POST /api/videos/new
const newVideo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    topicId: Joi.string().required(),
  }),
};

// GET /api/videos/search?keyword=keyword

// GET /api/videos/:videoId
