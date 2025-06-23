import express from "express"
import signInController from "../controller/signInController.js"

const userRouter = express.Router()

userRouter.post("/signin", signInController)

export default userRouter