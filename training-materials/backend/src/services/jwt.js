import jwt from "jsonwebtoken";

// -------------------- jwt functions -----------------//
export const createAccessToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_ACCESS_SECRET, { expiresIn: "1h" });
};
export const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.TOKEN_REFRESH_SECRET, { expiresIn: "7d" });
};
