import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

//retrieve all data from db

const getAllDataFromDB = async (email: string) => {
  //for search query
  if (email) {
    const result = await Order.find({
      email: { $regex: email, $options: "i" },
    });
    return result;
  } else {
    const result = await Order.find();
    return result;
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllDataFromDB,
};
