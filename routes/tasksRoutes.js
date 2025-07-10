import express from"express";
import { createTask, deleteTsk, getAllTasks, updateTask } from "../controllers/tasksControllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import { taskSchema } from "../validations/taskValidation.js";


const tasksRouter = express.Router()


tasksRouter.get("/all",getAllTasks);
tasksRouter.post("/new",validateSchema(taskSchema),createTask);
tasksRouter.patch("/:id",updateTask);
tasksRouter.delete("/:id",deleteTsk);

export default tasksRouter;