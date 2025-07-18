import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    title: { type: String,  required: true },
    category: { type: String,  required: true },
    amount: { type: Number,  required: true },
    notes: { type: String,  required: true },
    type: {
      type: String,
      enum: ["Expenses", "Income"],
      default: "Expenses",
    },
    payment: {
      type: String,
      enum: ["Bank", "Cash"],
      default: "Bank",
    },
    date: { type: Date, default: Date.now() },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recurring : {type: String}
  },
  {
    versionKey: false,
  }
);

const ExpenseModel = mongoose.model("Expense", ExpenseSchema);

export default ExpenseModel;