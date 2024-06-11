const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const dbURL = `mongodb+srv://ayushrajsd:28Wca5DmXC6Q9BDW@cluster0.vg5saeo.mongodb.net/`;

// connect to DB
mongoose
  .connect(dbURL)
  .then(function (connection) {
    console.log("Connected to MongoDB");
  })
  .catch(function (err) {
    console.log(err);
  });

// create a schema

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    minLength: 8,
    validate: {
      validator: function () {
        return this.password === this.confirmPassword;
      },
      message: "Password and confirm password should be same",
    },
  },
});

const ProductModel = mongoose.model("products", productSchema);

app.post("/api/products", async function (req, res) {
  const body = req.body;
  console.log(body);
  try{
    const product = await ProductModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        category: body.category,
        isInStock: body.isInStock,
        password: body.password,
        confirmPassword: body.confirmPassword,
      });
      console.log(product);
      return res.status(201).json({ message: "Product creted successfully" });
  }catch(err){
    console.log(err);
    return res.status(400).json({message: err.message});
  
  }
  
});

app.get("/api/products", async (req, res) => {
  const allProducts = await ProductModel.find();
  // const allProducts = await ProductModel.find({category: "electronics"});
  console.log(allProducts);
  return res.status(200).json(allProducts);
});

app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.status(200).json(product);
});

app.put("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({ message: "Product updated successfully" });
});

app.delete("/api/products/:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Product deleted successfully" });
});

app.listen(3000, function () {
  console.log("Server is running");
});
