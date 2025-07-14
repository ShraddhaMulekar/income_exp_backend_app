import express from "express";
import ExpenseModel from "../models/expenses.model.js";

const checkExpController = async (req, res) => {
  const { search, category, type, sortBy, sortOrder, page, limit } = req.query;
  // check user log in or not
  const query = { user: req.user.id };
  // search by title & notes
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { notes: { $regex: search, $options: "i" } },
    ];
  }
  // filter by category
  if (category) {
    query.category = category;
  }

  if (type) {
    query.type = type;
  }

  // sort by amount, date
  let sortOption = {};
  if (sortBy) {
    sortOption[sortBy] = sortOrder === "asc" ? 1 : -1;
  } else {
    sortOption.date === -1;
  }

  //pagination
  const pageNumber = parseInt(page) || 1;
  const pageSize = parseInt(limit) || 5;
  const skip = (pageNumber - 1) * pageSize;

  try {
    const checkExp = await ExpenseModel.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(pageSize);

    const total = await ExpenseModel.countDocuments(query);

    const expense = ("total:", total, "pageSize:", pageSize, "exp:", checkExp);

    return res.json({ msg: "All expenses are:", expense, page: pageNumber });
  } catch (error) {
    return res.json({ msg: "error in check expenses controller", error });
  }
};

export default checkExpController;
