import * as z from "zod";

const userSchema = z.object({
  username: z.string().min(3, "username must be at least 3 characters long"),
  displayName: z.string(),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export { userSchema };
