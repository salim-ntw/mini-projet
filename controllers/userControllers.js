import userModels from "../models/userModels.js";

async function getAllUsers(req, res) {
  try {
    let result = await userModels.find({});
    res.json({ users: result });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

async function createUser(req, res) {
  try {
    const { password, ...rest } = req.body;
    const hashPassword = await userModels.hashPassword(password);
    const newUser = {
      ...rest,
      password: hashPassword,
    };
    const result = await userModels.create(newUser);
    res.json({ message: "new user created successfully", result });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

async function updateUser(req, res) {
  try {
    const idToModify = req.params.id;
    const infos = req.body;
    await userModels.UpdateOne({ _id: idToModify }, { ...infos });
    res.json({ message: "user has been modified" });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}

async function deleteUser(req, res) {
  try {
    const idTodelete = req.params.id;

    await tasksModels.deleteOne({ _id: idTodelete });
    res.json({ message: "user has been deleted" });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
}
//compare
  async function resetPassword(req, res) {
    const { prevPassword, newPassword, userid } = req.body;
  
    const user = await userModels.findById(userid);
  
    const isMatch = await user.comparePassword(prevPassword);
    if (isMatch) {
      const hashedPasowrd = await userModels.hashPassword(newPassword);
      await userModels.updateOne(
        { _id: userid },
        { $set: { password: hashedPasowrd } }
      );
      res.json({message:"izan"})
    } else {
      res.status(400).json({ message: "Previous password is incorrect" });
      return;
    }
  }
  
export { getAllUsers, createUser, updateUser, deleteUser, resetPassword };
