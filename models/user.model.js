import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName : {type:String, required:true},
    email : {type:String, unique:true, required:true},
    password : {type:String, required:true}
}, {
    versionKey:false
})

const UserModel = mongoose.model("User", UserSchema)

export default UserModel