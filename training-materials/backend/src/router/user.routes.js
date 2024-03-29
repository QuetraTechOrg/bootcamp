/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getAuthenticatedUser,
  getUserById,
  login,
  saveUser,
  updateUser,
} from "../controllers/user.controller.js";
import { Auth, AuthAdmin } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/register", saveUser);

router.get("/", Auth, AuthAdmin, getAllUsers);

router.get("/:id", getUserById);

router.get("/me", Auth, getAuthenticatedUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUserById);

router.post("/login", login);

//TODO ; Retrieve all users, the one user by his name

export default router;
