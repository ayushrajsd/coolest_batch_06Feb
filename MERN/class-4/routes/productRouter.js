const express = require("express");
const { getAllProducts, getProductById, createProduct, updateProductById, deleteProductById } = require("../controllers/productController");

const productRouter = express.Router();

// /api/products/
productRouter.get("/",getAllProducts);
productRouter.get("/:id",getProductById); // /api/products/123
productRouter.post("/",createProduct);
productRouter.put("/:id",updateProductById);
productRouter.delete("/:id",deleteProductById);

module.exports = productRouter;