import express from "express";
import { ProductControllers } from "./product.controller";
const router = express.Router();

//Product all routes
router.post("/create-product", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.delete("/:productId", ProductControllers.deleteOneProduct);
router.put("/:productId", ProductControllers.updateProduct);

export const ProductRoutes = router;
