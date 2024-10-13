import Joi from "joi";

// POST /v1/users

// POST /v1/users/comment
const newComment = Joi.object().keys({
  videoId: Joi.string().required(),
  comment: Joi.string().required(),
});

export default {
  newComment,
};
