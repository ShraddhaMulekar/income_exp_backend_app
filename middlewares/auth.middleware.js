import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.json({ msg: "access declined!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECREATEKEY);
    // console.log("decoded", decoded)

    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    return res.json({ msg: "error in auth middleware", error });
  }
};

export default authMiddleware;
