import Joi from "joi";

// POST /api/topics/new
const newTopic = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

// GET /api/topics/search?keyword=keyword

// GET /api/topics/:topicId
