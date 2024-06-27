import { z } from "zod";

const order = z.object({
  comments: z.string().trim().max(300, "Max comments length is 300 symbols."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Email is not valid."),
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .min(4, "Too short full name.")
    .max(50, "Too long full name."),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .regex(/^\+([1-9]{1}[0-9]{0,2})/, "Country code is missing.")
    .regex(
      /^\+([1-9]{1}[0-9]{0,2})\s?([0-9]{7,14})$/,
      "Phone number is not valid."
    ),
  shippingAddress: z
    .string()
    .trim()
    .min(1, "Shipping address is required.")
    .max(300, "Too long shipping address."),
});

export { order };
