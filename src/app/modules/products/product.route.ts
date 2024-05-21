import express from "express";
import { ProductControllers } from "./product.controller";
import { Product } from "./product.model";
const router = express.Router();

//create route
router.post("/create-product", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.delete("/:productId", ProductControllers.deleteOneProduct);
router.put("/update-product/:id", ProductControllers.updateProduct);

export const ProductRoutes = router;
