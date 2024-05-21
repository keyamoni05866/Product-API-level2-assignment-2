import { TOrder } from "./order.interface";
import { Schema, model } from "mongoose";

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true, unique: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Order = model<TOrder>("Order", orderSchema);