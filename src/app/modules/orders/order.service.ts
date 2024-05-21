import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

//retrieve all data from db

const getAllDataFromDB = async () => {
  const result = await Order.find();
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllDataFromDB,
};