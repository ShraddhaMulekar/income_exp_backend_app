import ExpenseModel from "../models/expenses.model.js";

const updateExpController = async (req, res) => {
  const { id } = req.params;
  try {
    const expenses = await ExpenseModel.findById(id);
    console.log("expenses are:", expenses);

    if (!expenses) {
      return res.json({ msg: "expenses not found!" });
    }

    if (!expenses.user) {
      return res.status(400).json({ msg: "This expense has no user assigned" });
    }

    if (expenses.user.toString() !== req.user.id) {
      return res.json({ msg: "You are not authorized to update this expense" });
    }

    const updateExp = await ExpenseModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    updateExp.save();
    return res.json({ msg: "updated successful!", updateExp });
    
  } catch (error) {
    console.log("error in update expenses controller", error);
    return res.json({ msg: "error in update expenses controller", error });
  }
};

export default updateExpController;
