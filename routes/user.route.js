import express from "express";
import signInController from "../controller/signInController.js";
import logInController from "../controller/logInController.js";
import LogOutController from "../controller/logOutController.js";
import allUsersController from "../controller/allUsersController.js";

const userRouter = express.Router();

userRouter.post("/signin", signInController);
userRouter.post("/login", logInController);
userRouter.post("/logout", LogOutController);
userRouter.get("/check-user", allUsersController);

export default userRouter;
