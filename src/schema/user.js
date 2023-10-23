const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "any.required": "The Name field is required",
    "string.empty": "The Name field cannot be empty",
    "string.base": "The Name field must be text",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "The Email field is required",
    "string.empty": "The Email field cannot be empty",
    "string.email": "The Email field must be a valid email",
    "string.base": "The Email field must be text",
  }),
  password: Joi.string().trim().required().messages({
    "any.required": "The Password field is required",
    "string.empty": "The Password field cannot be empty",
    "string.base": "The Password field must be text",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "The Email field is required",
    "string.empty": "The Email field cannot be empty",
    "string.email": "The Email field must be a valid email",
    "string.base": "The Email field must be text",
  }),
  password: Joi.string().trim().required().messages({
    "any.required": "The Password field is required",
    "string.empty": "The Password field cannot be empty",
    "string.base": "The Password field must be text",
  }),
});

module.exports = {
  userSchema,
  loginSchema,
};
