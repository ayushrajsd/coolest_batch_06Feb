const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const allProducts = await ProductModel.find();
  // const allProducts = await ProductModel.find({category: "electronics"});
  console.log(allProducts);
  return res.status(200).json(allProducts);
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json(product);
};

const updateProductById = async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ message: "Product updated successfully" });
};

const deleteProductById = async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Product deleted successfully" });
};

const createProduct = async (req, res) => {
    console.log("product creation in progress")
  const {
    product_name,
    product_price,
    isInStock,
    category,
    password,
    confirmPassword,
  } = req.body;
  try {
    const product = await ProductModel.create({
      product_name: product_name,
      product_price: product_price,
      category: category,
      isInStock: isInStock,
      password: password,
      confirmPassword: confirmPassword,
    });
    console.log(product);
    console.log("product created successfully")
    return res.status(201).json({ message: "Product creted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
