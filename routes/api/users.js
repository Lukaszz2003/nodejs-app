import express from "express";

import * as user from "#controllers/users/index.js";
import * as validators from "#validators/index.js";
import * as middlewares from "#middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", validators.usersPostSchema, user.signUp);
userRouter.post("/login", validators.usersPostSchema, user.login);
userRouter.get("/logout", middlewares.auth, user.logout);
userRouter.get("/current", middlewares.auth, user.current);
userRouter.patch(
  "/",
  middlewares.auth,
  validators.usersSubscSchema,
  user.subscription
);

export { userRouter };
