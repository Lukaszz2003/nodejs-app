import Joi from "joi";

const schema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

export const usersSubscSchema = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};
