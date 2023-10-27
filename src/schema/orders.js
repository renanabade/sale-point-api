const Joi = require("joi");

const orderProductSchema = Joi.object({
  product_id: Joi.number().integer().required().messages({
    "any.required": "The Product field is required",
    "number.base": "The Product field must be a number",
    "number.empty": "The Product field cannot be empty",
    "number.integer": "The Product field must be an integer",
  }),
  product_quantity: Joi.number().integer().required().min(1).messages({
    "any.required": "The Product Quantity field is required",
    "number.base": "The Product Quantity field must be a number",
    "number.empty": "The Product Quantity field cannot be empty",
    "number.integer": "The Product Quantity field must be an integer",
    "number.min": "The Product Quantity field cannot be zero or negative",
  }),
});

const orderSchema = Joi.object({
  customer_id: Joi.number().integer().required().messages({
    "any.required": "The Customer field is required",
    "number.base": "The Customer field must be a number",
    "number.empty": "The Customer field cannot be empty",
    "number.integer": "The Customer field must be an integer",
  }),
  note: Joi.string().optional().allow("").messages({
    "string.empty": "The Notes field can be empty",
    "string.base": "The Notes field must be text",
  }),
  order_products: Joi.array()
    .min(1)
    .items(orderProductSchema)
    .required()
    .messages({
      "any.required": "The Order Products field is required",
      "array.base": "The Order Products field must be a list",
      "array.empty": "The list of Order Products cannot be empty",
      "array.min": "The list of Order Products must have at least one item",
    }),
});

module.exports = {
  orderSchema,
};
