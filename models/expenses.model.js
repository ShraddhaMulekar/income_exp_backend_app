import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    title: { type: String },
    category: { type: String },
    amount: { type: Number },
    notes: { type: String },
    type: {
      type: String,
      enum: ["Expenses", "Income", "Other"],
      default: "Expenses",
    },
    payment: {
      type: String,
      enum: ["Bank", "CacheStorage", "Other"],
      default: "Bank",
    },
    date: { type: Date, default: Date.now() },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    versionKey: false,
  }
);

const ExpenseModel = mongoose.model("Expense", ExpenseSchema);

export default ExpenseModel;
