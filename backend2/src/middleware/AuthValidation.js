import Joi from "joi";

export const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(50).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((d) => d.message),
    });
  }

  next();
};

export const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(50).required(),
  }).options({ abortEarly: false });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((d) => d.message),
    });
  }

  next();
};
