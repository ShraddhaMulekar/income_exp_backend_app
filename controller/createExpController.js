import ExpenseModel from "../models/expenses.model.js";

const createExpController = async (req, res) => {
  const { title, amount, category, notes, payment, date, type, recurring } =
    req.body;
  try {
    const newExp = await ExpenseModel.create({
      title,
      type,
      amount,
      recurring,
      category,
      notes,
      payment,
      date,
      user: req.user.id,
    });

    await newExp.save();
    return res.json({ msg: `new ${type} created successfully!` });
  } catch (error) {
    console.log("error in create exp controller!", error);
    return res.json({ msg: "all feilds are required!", error });
  }
};

export default createExpController;
