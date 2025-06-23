import UserModel from "../models/user.model.js"

const allUsersController = async(req, res)=>{
    const users = await UserModel.find()
    return res.json({msg:"all users!", users})
}

export default allUsersController