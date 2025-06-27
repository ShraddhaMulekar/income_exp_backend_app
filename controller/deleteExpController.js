import ExpenseModel from "../models/expenses.model.js"

const deleteExpController = async(req, res)=>{
    const {id} = req.params
    try {
        const expenses = await ExpenseModel.findById(id)

        if(!expenses) {
            return res.json({msg:"expenses not found!"})
        }

        if(expenses.user.toString() !== req.user.id){
            return res.json({ msg: "You are not authorized to delete this expense" });
        }

        const deleteExp = await ExpenseModel.findByIdAndDelete(id)
        return res.json({msg:"deleted successful!", deleteExp})

    } catch (error) {
        return res.json({msg:"error in delete expenses controller", error})
    }
}

export default deleteExpController