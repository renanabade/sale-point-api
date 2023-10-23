const Joi = require("joi");

const customerIdSchema = Joi.object({
  customerId: Joi.number().integer().optional().messages({
    "number.base": "The customer_id field must be a number",
    "number.empty": "The customer_id field cannot be empty",
    "number.integer": "The customer_id field must be an integer",
  }),
});

const categoryIdSchema = Joi.object({
  categoryId: Joi.number().integer().optional().messages({
    "number.base": "The category_id field must be a number",
    "number.empty": "The category_id field cannot be empty",
    "number.integer": "The category_id field must be an integer",
  }),
});

module.exports = {
  customerIdSchema,
  categoryIdSchema,
};
