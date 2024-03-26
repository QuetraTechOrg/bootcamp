/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import express from "express";
import Users from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const newUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      password: data.password,
    };

    const user = new Users({ ...newUser });
    await user.save();
    res.status(202).json({ message: "User saved!!!" });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);
    res.status(202).json({ user: user });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
});

//TODO ; Retrieve all users, the one user by his name

export default router;
