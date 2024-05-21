import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.route";
const app = express();

//parser
app.use(express.json());
app.use(cors());

//Route
app.use("/api/products", ProductRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//route error
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});
export default app;
