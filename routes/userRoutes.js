import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
  resetPassword,
} from "../controllers/userControllers.js";

const usersRouter = express.Router();

usersRouter.get("/all", getAllUsers);
usersRouter.post("/new", createUser);
usersRouter.patch("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.post("/reset",resetPassword);

export default usersRouter;
