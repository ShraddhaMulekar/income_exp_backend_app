import mongoose from "mongoose";

const LogOutSchema = new mongoose.Schema({
    token : {type:String, required:true},
    date:{type:Date, default:Date.now()}
}, {
    versionKey:false
})

const LogOutModel = mongoose.model("Logout", LogOutSchema)

export default LogOutModel