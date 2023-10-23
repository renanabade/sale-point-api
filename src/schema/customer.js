const Joi = require("joi");

const customerSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "any.required": "The Name field is required",
    "string.empty": "The Name field cannot be empty",
    "string.base": "The Name field must be a text",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "The Email field is required",
    "string.empty": "The Email field cannot be empty",
    "string.email": "The Email field must be a valid email",
    "string.base": "The Email field must be a text",
  }),
  cpf: Joi.string()
    .trim()
    .required()
    .pattern(/^\d{3}.\d{3}.\d{3}-\d{2}$|^\d{11}$|^\d{3}.\d{3}.\d{3}.\d{2}$/)
    .messages({
      "any.required": "The CPF field is required and cannot be be empty",
      "string.empty": "The CPF field is required and cannot be empty",
      "string.base": "The CPF field must be a text",
      "string.pattern.base":
        "The CPF field must be in a valid format (e.g., 123.456.789-00, 12345678900, 123.456.789.00)",
    }),
  zipCode: Joi.string()
    .trim()
    .optional()
    .pattern(/^\d{5}-\d{3}$|^\d{8}$|^\d{5}\s\d{3}$/)
    .messages({
      "string.empty": "The Zip Code field cannot be empty",
      "string.base": "The Zip Code field must be a text",
      "string.pattern.base":
        "The Zip Code field must be in a valid format (e.g., 89820-000, 89820000, 89820 000)",
    }),
  street: Joi.any().optional(),
  number: Joi.any().optional(),
  neighborhood: Joi.any().optional(),
  city: Joi.any().optional(),
  state: Joi.any().optional(),
});

module.exports = {
  customerSchema,
};
