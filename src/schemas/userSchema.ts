import * as z from "zod";

export const userSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),

  email: z.email({
    error: "Enter a valid email address.",
  }),
});

export type UserFormData = z.infer<typeof userSchema>;
