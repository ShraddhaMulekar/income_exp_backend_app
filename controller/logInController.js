import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const logInController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const matchEmail = await UserModel.findOne({ email });
    if (!matchEmail) {
      return res.json({ msg: "email id not registered. please sign in now!" });
    } else {
      bcrypt.compare(password, matchEmail.password, (err, result) => {
        if (err) {
          return res.json({ msg: "error here", err });
        } else if (result) {

          const payload = {
            userId: matchEmail.id,
            userName: matchEmail.userName,
          };

          const token = jwt.sign(payload, process.env.SECREATEKEY);
          return res.json({ msg: "Log in successful!", token });
          
        } else {
          return res.json({ msg: "invalid password.." });
        }
      });
    }
  } catch (error) {
    return res.json({ msg: "error in log in controller!", error });
  }
};

export default logInController;
