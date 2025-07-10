import * as z from "zod";

const taskSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  status: z.enum(["incomplete", "in-progress", "complete"]),
  userId: z.string().optional(),
});

export {taskSchema};