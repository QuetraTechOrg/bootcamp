/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import Users from "../models/User.js";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken } from "../services/jwt.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "this user does not exit !" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(404).json({ message: "wrong credentials !" });
    }

    //---------------- creating token for the new user -----------------------------//
    const accesstoken = createAccessToken({ id: user._id });
    const refreshtoken = createRefreshToken({ id: user._id });

    // res.cookie("refreshtoken", refreshtoken, {
    //   httpOnly: true,
    //   path: "/api/user/refresh_token",
    //   maxAge: 7 * 24 * 60 * 60 * 1000,
    // });

    res.status(202).json({
      success: true,
      accesstoken: accesstoken,
      refreshtoken: refreshtoken,
    });
  } catch (error) {
    res.status(503).json({ success: false, message: error.message });
  }
};
export const saveUser = async (req, res) => {
  try {
    const userAuth = req.user;
    const data = req.body;
    const newUser = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      password: data.password,
    };

    const hashPasword = await bcrypt.hash(newUser.password, 10);
    const user = new Users({ ...newUser, password: hashPasword });
    await user.save();
    res.status(202).json({ message: "User saved!!!", user: user });
  } catch (error) {
    res.status(501).json({ success: false, message: error.message });
  }
};

//Fetch all users present in the database
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find().select("-password");
    res.status(201).json({ total: users.length, data: users });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { email, phone } = req.params;
    const user = await Users.findOne({ email: email, phone: phone });
    res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// //-------------------------------- UPDATE USER --------------------------------------------//
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, address, phone } = req.body;
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      //filter
      { _id: id },
      //data to change
      { name: name, address: address, phone: phone },
      //options
      { new: true }
    ).select("-password");
    res.status(201).json({ msg: "Profile modified", data: updatedUser });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

//Fetch USER by his ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id).select("-password");
    if (!user)
      return res.status(404).json({ msg: "This user does not exist !" });

    //query response
    res.status(201).json({ user: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    if (!user)
      return res.status(404).json({ msg: "This user does not exist !" });
    await Users.findByIdAndDelete(id);
    //query response
    res.status(201).json({ message: "user deleted!!!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAuthenticatedUser = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await Users.findById(id).select("-password");
    if (!user)
      return res.status(404).json({ msg: "This user does not exist !" });

    //query response
    res.status(201).json({ user: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
