import jwt from "jsonwebtoken";
import Users from "../models/User.js";

export const Auth = async (req, res, next) => {
  try {
    const accesstoken = req.header("Authorization");
    if (!accesstoken)
      return res.status(404).json({ message: "Invalid Authentification !" });

    const isTokenGood = jwt.verify(
      accesstoken,
      process.env.TOKEN_ACCESS_SECRET
    );

    const user = await Users.findById(isTokenGood.id).select("-password");
    !user
      ? res.status(404).json({ message: "Unauthorized !" })
      : (req.user = user);
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "invalid token" });
  }
};

const AuthAdmin = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.accreditation === 0)
      return res.status(404).json({ message: "ressources access denied" });
    next();
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
