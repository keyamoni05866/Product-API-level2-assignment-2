import { TProduct } from "./product.interface";
import { Product } from "./product.model";

//creating product into database
const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

//find all product data from database also implement search query here
const getAllProductsFromDB = async (searchTerm: string) => {
  if (searchTerm) {
    const result = await Product.find({
      name: { $regex: searchTerm, $options: "i" },
    });
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
};

///get single product by id
const getSingleProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

//update a data
const updateProduct = async (_id: string, updateData: TProduct) => {
  // console.log({ _id });
  const result = await Product.findByIdAndUpdate(_id, updateData, {
    returnOriginal: false,
  });
  return result;
};

//delete product from db
const deleteOneProductFromDB = async (_id: string) => {
  const result = await Product.findByIdAndDelete({ _id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteOneProductFromDB,
  updateProduct,
};
