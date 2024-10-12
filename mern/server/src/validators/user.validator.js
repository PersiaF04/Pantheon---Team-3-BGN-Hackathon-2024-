import Joi from "joi";

// POST /api/users?accessToken=accessToken

// POST /api/users/comment
const newComment = {
  body: Joi.object().keys({
    videoId: Joi.string().required(),
    comment: Joi.string().required(),
  }),
};

export default {
  newComment,
};
