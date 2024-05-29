import { z } from "zod";

const email = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Email is not valid."),
});

export { email };
