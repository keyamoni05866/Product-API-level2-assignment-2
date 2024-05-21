import { z } from "zod";

export const varientValidationSchema = z.object({
  type: z.string({
    required_error: "Type is required",
    invalid_type_error: "Type must be a string",
  }),
  value: z.string({
    required_error: "Value is required",
    invalid_type_error: "Value must be a string",
  }),
});

// Define the Zod schema for TInventory
export const inventoryValidationSchema = z.object({
  quantity: z.number({
    required_error: "quantity is required",
    invalid_type_error: "quantity must be a number",
  }),
  inStock: z.boolean({
    required_error: "inStock is required",
    invalid_type_error: "inStock must be a boolean",
  }),
});

// Define the Zod schema for TProduct
export const productValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .trim(),
  description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description must be a string",
    })
    .trim(),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "price must be a number",
  }),
  category: z.string({
    required_error: "category is required",
    invalid_type_error: "category must be a string",
  }),
  tags: z.array(z.string()).nonempty(),
  variants: z.array(varientValidationSchema).nonempty(),
  inventory: inventoryValidationSchema,
});
