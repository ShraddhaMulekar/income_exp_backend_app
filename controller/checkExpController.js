import express from "express"
import ExpenseModel from "../models/expenses.model.js"

const checkExpController = async(req, res)=>{
    try {
        const checkExp = await ExpenseModel.find()
        return res.json({msg:"All expenses are:", checkExp})
    } catch (error) {
        return res.json({msg:'error in check expenses controller'})
    }
}

export default checkExpController