import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true
  },
  lastLogin:{
    type:Date,
  }
},
{
timestamp:true
});
userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};
userSchema.methods.comparePassword = async function(enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};
const userModel = mongoose.model("Users",userSchema);


export default userModel;