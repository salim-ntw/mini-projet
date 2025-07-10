import e from "express";
import { login } from "../controllers/authControllers.js";


const authRouter = e.Router();
 authRouter.post("/login" , login);
 


 export default authRouter;