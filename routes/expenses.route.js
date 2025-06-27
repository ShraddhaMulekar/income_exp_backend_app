import express from "express"
import createExpController from "../controller/createExpController.js"
import checkExpController from "../controller/checkExpController.js"
import authMiddleware from "../middlewares/auth.middleware.js"
import updateExpController from "../controller/updateExpController.js"
import deleteExpController from "../controller/deleteExpController.js"

const expensesRouter = express.Router()

expensesRouter.post("/create", authMiddleware, createExpController)
expensesRouter.get("/check", authMiddleware, checkExpController)
expensesRouter.put("/update/:id", authMiddleware, updateExpController)
expensesRouter.delete("/delete/:id", authMiddleware, deleteExpController)


export default expensesRouter