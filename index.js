import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnected from "./dbConfig/dbConfig.js";
import userRouter from "./routes/user.route.js";
import expensesRouter from "./routes/expenses.route.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/expenses", expensesRouter);

app.listen(port, async () => {
  try {
    await dbConnected();
    console.log(`server running on http://localhost:${port}`);
  } catch (err) {
    console.error("❌ Failed to connect to database:", err);
  }
});
