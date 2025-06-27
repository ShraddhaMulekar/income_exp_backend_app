import ExpenseModel from "../models/expenses.model.js";

const createExpController = async (req, res) => {
  const { title, amount, category, notes, payment, date, type } = req.body;
  try {
    const newExp = await ExpenseModel.create({
      title,
      type,
      amount,
      category,
      notes,
      payment,
      date,
      user: req.user.id,
    });

    await newExp.save();
    return res.json({ msg: "new expense created successfully!" });

  } catch (error) {
    // console.log("error in create exp controller!", error);
    return res.json({ msg: "error in create exp controller!", error });
  }
};

export default createExpController;
