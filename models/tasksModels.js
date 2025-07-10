import mongoose , {Schema} from "mongoose";
import { required } from "zod/v4-mini";

const tasksSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
    status: {
      type: String,
      enum: ["incomplete", "in-progress", "complete"],
      required: true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:false
    },

  },
  {
    timestamp: true,
  }
);
const tasksModels = mongoose.model("tasks", tasksSchema);
export default tasksModels;
