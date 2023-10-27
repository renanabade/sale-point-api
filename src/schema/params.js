const Joi = require("joi");

const idNumericSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "any.required": "The ID field is required",
    "number.base": "The ID field must be a number",
    "number.empty": "The ID field cannot be empty",
    "number.integer": "The ID field must be an integer",
  }),
});

module.exports = {
  idNumericSchema,
};
