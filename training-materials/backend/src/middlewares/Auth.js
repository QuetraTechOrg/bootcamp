import jwt from "jsonwebtoken";
import Users from "../models/User.js";

export const Auth = async (req, res, next) => {
  try {
    const accesstoken = req.header("Authorization").split(" ")[1];
    if (!accesstoken)
      return res.status(404).json({ message: "Invalid Authentification !" });

    const isTokenGood = jwt.verify(
      accesstoken,
      process.env.TOKEN_ACCESS_SECRET
    );

    const user = await Users.findById(isTokenGood.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "Unauthorized !" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "invalid token" });
  }
};

export const AuthAdmin = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.role !== 100)
      return res.status(404).json({ message: "ressources access denied" });

    next();
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};
