import express from "express";
import dotenv from "dotenv";
import connectToDB from "./config/connectDB.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import morgan from "morgan";
import usersRoutes from "./routes/userRoutes.js";

dotenv.config();
connectToDB();
const server = express();
server.use(express.json());
server.use(morgan("dev"));



//endpoint creation
//tasks
server.use("/task", tasksRoutes);
//user endpoints
server.use("/user", usersRoutes);


server.listen(process.env.PORT, () => {
  console.log("server is running on port :" + process.env.PORT);
});
