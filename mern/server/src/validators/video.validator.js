import Joi from "joi";

// POST /v1/videos/new
export const newVideo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    topicId: Joi.string().required(),
  }),
};

// GET /v1/videos/search?keyword=keyword

// GET /v1/videos/:videoId

export default {
  newVideo,
};
