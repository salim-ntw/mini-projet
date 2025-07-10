import  jwt from "jsonwebtoken";
import userModel from "../models/userModels.js";

//loging password
async function login(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    res.status(404).json({ message: "user not found" });
    return;
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    res.status(401).json({ message: "wrong password .. try again" });
  }
  const token = jwt.sign({...user}, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token: token, message: "logged in succesfully..." });
}
export {login};