import { z } from "zod";

const contact = z.object({
  comments: z.string().trim().max(300, "Max comments length is 300 symbols."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Email is not valid."),
  fullName: z
    .string()
    .trim()
    .min(1, "Name is required.")
    .min(2, "Too short name.")
    .max(25, "Too long name."),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\+([1-9]{1}[0-9]{0,2})/, "Country code is missing.")
    .regex(
      /^\+([1-9]{1}[0-9]{0,2})\s?([0-9]{7,14})$/,
      "Phone number is not valid."
    )
    .or(z.literal("")),
});

export { contact };
