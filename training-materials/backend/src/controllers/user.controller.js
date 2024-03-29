/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import Users from "../models/User.js";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken } from "../services/jwt.js";

export const login = async (req, res) => {
  const data = req.body;
  const { email, password } = req.body;
  try {
    //----------------------- user credential validation --------------------------//
    const { error } = loginValidation(data);
    if (error) return res.status(400).json(error.details[0].message);

    const user = await Users.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "this user does not exit !" });

    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified)
      return res.status(404).json({ message: "wrong credentials !" });

    //---------------- creating token for the new user -----------------------------//
    const accesstoken = createAccessToken({ id: user._id });
    const refreshtoken = createRefreshToken({ id: user._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/api/user/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(202).json({ success: true, accesstoken: accesstoken });
  } catch (error) {
    res.status(503).json({ success: false, message: error.message });
  }
};
export const saveUser = async (req, res) => {
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

// //-------------------------------- UPDATE USER --------------------------------------------//
// export const updateUser = async (req, res) => {
//   const data = req.body;
//   const { name, company, address, phone, password, confirmPassword } = req.body;
//   try {
//     if (password) {
//       if (!confirmPassword)
//         return res.status(400).json({ msg: "please confirm your password" });
//       //------------------------------- schema validation------------------------//
//       const { error } = updateUserValidationWithPassword(data);
//       if (error) return res.status(400).json(error.details[0].message);
//       const salt = await bcrypt.genSalt(10);
//       const passwordHash = await bcrypt.hash(password, salt);
//       await Users.findOneAndUpdate(
//         { _id: req.user.id },
//         {
//           name: name,
//           company: company,
//           address: address,
//           phone: phone,
//           password: passwordHash,
//         }
//       );
//       res.status(201).json({ msg: "Profile modified" });
//     } else {
//       //------------------------------- schema validation------------------------//
//       const { error } = updateUserValidationWithoutPassword(data);
//       if (error) return res.status(400).json(error.details[0].message);
//       await Users.findOneAndUpdate(
//         { _id: req.user.id },
//         { name: name, company: company, address: address, phone: phone }
//       );
//       res.status(201).json({ msg: "Profile modified" });
//     }
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

//Fetch USER by his ID
export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id).select("-password");
    if (!user)
      return res.status(404).json({ msg: "This user does not exist !" });

    //query response
    res.status(201).json({ user: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
