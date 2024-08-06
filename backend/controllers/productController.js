import Product from "../models/productModel.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(200).json(products);
});

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) throw new AppError("Product not found.", 404);

  res.status(200).json(product);
});

// @desc    Create new product
// @route   POST /api/products
// @access  Private | Admin | Seller
export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, brand, stock } = req.body;

  const newProduct = await Product.create({
    user: req.user._id,
    name,
    description,
    price,
    category,
    brand,
    stock,
    images: ["https://placehold.co/400"],
  });

  res.status(201).json(newProduct);
});

// @desc    Update product
// @route   PATCH /api/products/:id
// @access  Private | Admin | Seller
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) throw new AppError("Product not found.", 404);

  if (req.user.role !== "admin" && !product.user.equals(req.user._id)) {
    throw new AppError(
      "You do not have permission to perform this action.",
      403
    );
  }

  product.name = req.body.name || product.name;
  product.description = req.body.description || product.description;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;
  product.brand = req.body.brand || product.brand;
  product.stock = req.body.stock || product.stock;

  await product.save();

  res.status(200).json(product);
});

// @desc    Delete product
// @route   PATCH /api/products/:id
// @access  Private | Admin | Seller
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) throw new AppError("Product not found.", 404);

  if (req.user.role !== "admin" && !product.user.equals(req.user._id)) {
    throw new AppError(
      "You do not have permission to perform this action.",
      403
    );
  }

  await product.deleteOne();

  res.status(200).json({ message: "Product deleted successfully." });
});
