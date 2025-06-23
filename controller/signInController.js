import UserModel from "../models/user.model.js"
import bcrypt from "bcrypt"

const signInController = async(req, res)=>{
    const {userName, email, password} = req.body
    if(!userName && !email && !password){
        return res.json({msg:"username, email, password are required!"})
    }
    try {
        const matchEmail = await UserModel.findOne({email})
        if(matchEmail){
            return res.json({msg:"You are already register! please log in now!"})
        }
        else{
            bcrypt.hash(password, Number(process.env.SALTROUND), async(err, hash)=>{
                if(err){
                    return res.json({msg:"invalid password.."})
                } else if(hash){
                    const passwordChecked = await UserModel({userName, email, password:hash})
                    await passwordChecked.save()
                    return res.json({msg:"Sign in successful!", passwordChecked})
                } else{
                    return res.json({msg:"error here.."})
                }
            });
        }
    } catch (error) {
        return res.json({msg:"error in sign in controller!"})
    }
}

export default signInController