const mongoose = require("mongoose");
// create a schema

const productSchema = new mongoose.Schema(
  {
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
      type: [String],
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
  },
  { timestamps: true }
);

const validCategories = ["electronics", "fashion", "appliances", "furniture"];
productSchema.pre("save", function (next) {
  console.log("pre save hook");
  const invalidCategories = this.category.filter(
    (category) => !validCategories.includes(category)
  );
  if (invalidCategories.length) {
    // throw new Error("Invalid categories");
    return next(new Error(`Invalid categories ${invalidCategories.join(",")}`));
  } else {
    next();
  }
});

productSchema.pre("save", function () {
  this.confirmPassword = undefined;
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
