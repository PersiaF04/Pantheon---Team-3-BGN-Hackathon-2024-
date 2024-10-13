import Joi from "joi";

// POST /v1/users
const googleSignOn = Joi.object().keys({
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  image: Joi.string(),
});

// POST /v1/users/comment
const newComment = Joi.object().keys({
  topicId: Joi.string().required(),
  content: Joi.string().required(),
});

export default {
  newComment,
  googleSignOn,
};
