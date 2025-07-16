import express from"express";
import { createTask, deleteTsk, getAllTasks, updateTask } from "../controllers/tasksControllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import { taskSchema } from "../validations/taskValidation.js";
import { checkAuth } from "../middlewares/checkAuth.js";


const tasksRouter = express.Router()


tasksRouter.get("/all",checkAuth,getAllTasks);
tasksRouter.post("/new",checkAuth,createTask);
tasksRouter.patch("/:id",updateTask);
tasksRouter.delete("/:id",deleteTsk);

export default tasksRouter;