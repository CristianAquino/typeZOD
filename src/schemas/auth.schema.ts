import { z } from "zod";
const signinSchema = z.object({
  email: z.string().nonempty("Email is required").email(),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export { signinSchema };
