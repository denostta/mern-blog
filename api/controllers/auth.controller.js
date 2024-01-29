import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fielld are required" });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    //saver new user to database:
    await newUser.save();
    // make a response if singup data was saved succesfully"
    res.json("Sign-up successfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
