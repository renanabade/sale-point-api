const Joi = require("joi");

const productSchema = Joi.object({
  description: Joi.string().trim().required().messages({
    "any.required": "The Description field is required",
    "string.empty": "The Description field cannot be empty",
    "string.base": "The Description field must be text",
  }),

  stockQuantity: Joi.number().integer().required().min(0).messages({
    "any.required": "The Stock Quantity field is required",
    "number.base": "The Stock Quantity field must be a number",
    "number.empty": "The Stock Quantity field cannot be empty",
    "number.integer": "The Stock Quantity field must be an integer",
    "number.min": "The Stock Quantity field cannot be negative",
  }),

  value: Joi.number().required().min(0).messages({
    "any.required": "The Value field is required",
    "number.base": "The Value field must be a number",
    "number.empty": "The Value field cannot be empty",
    "number.min": "The Value field cannot be negative",
  }),

  categoryId: Joi.number().integer().required().messages({
    "any.required": "The Category field is required",
    "number.base": "The Category field must be a number",
    "number.empty": "The Category field cannot be empty",
    "number.integer": "The Category field must be an integer",
  }),
});

module.exports = {
  productSchema,
};
