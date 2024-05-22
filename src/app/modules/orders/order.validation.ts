import { z } from "zod";

export const orderValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),

  productId: z.string({
    required_error: "productId is required",
  }),
  price: z
    .number({
      required_error: "price is required",
    })
    .positive("Price must be a positive number"),
  quantity: z
    .number({
      required_error: "quantity is required",
    })
    .int()
    .positive("Quantity must be a positive integer"),
});
