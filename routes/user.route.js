import express from "express"
import signInController from "../controller/signInController.js"
import logInController from "../controller/logInController.js"

const userRouter = express.Router()

userRouter.post("/signin", signInController)
userRouter.post("/login", logInController)

export default userRouter