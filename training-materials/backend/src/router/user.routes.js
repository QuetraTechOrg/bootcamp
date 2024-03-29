/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import express from "express";
import Users from "../models/User.js";
import {
  getAllUsers,
  getUserById,
  saveUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", saveUser);
router.get("/", getAllUsers);

router.get("/:id", getUserById);

//TODO ; Retrieve all users, the one user by his name

export default router;
