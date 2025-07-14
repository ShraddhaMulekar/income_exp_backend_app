import LogOutModel from "../models/logOut.model.js";

const LogOutController = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.json({ msg: "access declined!" });
  }

  await LogOutModel.create({ token });
  return res.json({ msg: "Log out successful!", token });
};

export default LogOutController;
