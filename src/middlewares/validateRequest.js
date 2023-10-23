const validateRequestBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const validateRequestParams = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.params);
    next();
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const validateQueryParams = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ mensagem: error.message });
    }
    next();
  };
};

module.exports = {
  validateRequestBody,
  validateRequestParams,
  validateQueryParams,
};
