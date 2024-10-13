import Joi from "joi";

// POST /v1/topics/new
const newTopic = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    thumbnail: Joi.string().required(),
  }),
};

// GET /v1/topics/search?keyword=keyword

// GET /v1/topics/:topicId

export default {
  newTopic,
};
