import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(12),
});

export const usersPostSchema = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};