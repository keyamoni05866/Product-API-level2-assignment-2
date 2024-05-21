import { ObjectId } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//creating product into database
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

//find all product data
const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

///get single product by id
const getSingleProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

//update a data

const updateProduct = async (_id: string) => {
  console.log({ _id });
  const result = await Product.findOneAndUpdate({ _id });
  return result;
};

//delete product from db

const deleteOneProductFromDB = async (_id: string) => {
  const result = await Product.findOneAndDelete({ _id });
  // console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteOneProductFromDB,
  updateProduct,
};
