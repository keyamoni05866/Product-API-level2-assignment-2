import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productValidationSchema } from "./product.validation";

///create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    //product data validation using zod
    const zodParsedData = productValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDB(zodParsedData);

    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).send({
      success: false,
      message: "something went wrong",
    });
  }
};

//get all Product
const getAllProducts = async (req: Request, res: Response) => {
  try {
    //for search query
    const { searchTerm } = req.query;
    if (searchTerm) {
      const result = await ProductServices.getAllProductsFromDB(
        searchTerm as string
      );
      res.status(200).send({
        success: true,
        message: `Products matching search term ${searchTerm} fetched successfully`,
        data: result,
      });
    }
    //for get all data
    else {
      const result = await ProductServices.getAllProductsFromDB(
        searchTerm as string
      );
      res.status(200).send({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Products Not Found",
    });
  }
};

///get single product by id

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    const result = await ProductServices.getSingleProductFromDB(productId);
    // console.log(result);
    if (result) {
      res.send({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
    } else {
      res.send({
        success: false,
        message: "Product Not Found!",
        data: null,
      });
    }
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Single Product Not Found",
    });
  }
};

//delete product
const deleteOneProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteOneProductFromDB(productId);
    if (result) {
      res.send({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    } else {
      res.send({
        success: false,
        message: "Product Not Found",
        data: null,
      });
    }
  } catch (err) {
    res.status(404).send({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

//product update

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // console.log(productId);
    const updateData = req.body;
    // console.log("update data", updateData);
    const result = await ProductServices.updateProduct(productId, updateData);
    if (result) {
      res.send({
        success: true,
        message: "Product updated successfully!",
        data: result,
      });
    } else {
      res.send({
        success: false,
        message: "Product Not Found",
        data: null,
      });
    }
  } catch (err) {
    res.status(404).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteOneProduct,
  updateProduct,
};
