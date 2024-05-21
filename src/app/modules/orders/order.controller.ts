import { Request, Response } from "express";
import { orderValidationSchema } from "./order.validation";
import { OrderServices } from "./order.service";

//create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    //zod parsed data
    const zodParsedData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrderIntoDB(zodParsedData);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

//retrieve all orders
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllDataFromDB();
    res.json({
      success: true,
      message: "Order  fetched  successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || "something went wrong",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
