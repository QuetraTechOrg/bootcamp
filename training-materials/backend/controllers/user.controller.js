/*roniceyemeli
@build by https://www.linkedin.com/in/roniceyemeli/
*/
import Users from "../models/User.js";
import bcrypt from "bcryptjs";

export const UserController = {
  async saveUser(req, res) {
    // const data = req.body;
    // const { name, email, company, phone, address, password } = req.body;

    try {
      res.send("Hello sav user!");
      //------------------------------- schema validation------------------------//
      // const { error } = registerValidation(data);
      // if (error) return res.status(400).json(error.details[0].message);

      // //---------------- information validation ------------------------------//
      // const userEmail = await Users.findOne({ email });
      // if (userEmail)
      //   return res.status(406).json({ message: "this email is already used" });

      // //------------------------- password hashing --------------------//
      // const salt = await bcrypt.genSalt(10);
      // const passwordHash = await bcrypt.hash(password, salt);
      // const newUser = await new Users({
      //   name,
      //   email,
      //   password: passwordHash,
      //   company,
      //   phone,
      //   address,
      // });

      // //--------------- save the new user in the data base ---------------//
      // await newUser.save();
      // res.status(201).json({ newUser, accesstoken });
    } catch (error) {
      res.status(501).json({ success: false, message: error.message });
    }
  },
};
//------------------------- get all users ---------------------------------//
// export const getAllUsers = async (req, res) => {
//   const { search, blocked, page, limit = 12 } = req.query;
//   let regxSearch = new RegExp(search, "i");
//   let valueType = search
//     ? { $or: [{ name: regxSearch }, { company: regxSearch }] }
//     : {};
//   let statusSearch = blocked ? { blocked: blocked } : {};
//   try {
//     const users = await Users.find({ $and: [valueType, statusSearch] })
//       .select("-password")
//       .limit(limit * 1)
//       .skip((page - 1) * limit)
//       .exec();
//     res.status(201).json({ total: users.length, list: users });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

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
//-------------------------------- get user by his id --------------------------------------------//
// export const getUserById = async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id).select("-password");
//     if (!user)
//       return res.status(404).json({ msg: "This user does not exist !" });

//     //query response
//     res.status(201).json({ user: user });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };
