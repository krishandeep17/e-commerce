import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc    Get current user
// @route   GET /api/users/me
// @access  Private
export const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(200).json(user);
});

// @desc    Update current user
// @route   PATCH /api/users/updateMe
// @access  Private
export const updateCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  user.firstName = req.body.firstName || user.firstName;
  user.lastName = req.body.lastName || user.lastName;

  const updatedUser = await user.save();

  res.status(200).json(updatedUser);
});

// @desc    Delete current user
// @route   DELETE /api/users/deleteMe
// @access  Private
export const deleteCurrentUser = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.user._id);

  res.clearCookie("jwt");
  res.status(200).json({ message: "User deleted successfully." });
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private | Admin
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
});

// @desc    Create new user
// @route   POST /api/users
// @access  Private | Admin
export const createUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) throw new AppError("User already exists.", 400);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
    role,
  });

  res.status(201).json(newUser);
});

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private | Admin
export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) throw new AppError("User not found.", 404);

  res.status(200).json(user);
});

// @desc    Update user
// @route   PATCH /api/users/:id
// @access  Private | Admin
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("+password");

  if (!user) throw new AppError("User not found.", 404);

  user.firstName = req.body.firstName || user.firstName;
  user.lastName = req.body.lastName || user.lastName;
  user.email = req.body.email || user.email;
  user.role = req.body.role || user.role;

  if (req.body.password) user.password = req.body.password;

  await user.save();

  res.status(200).json(user.removePassword());
});

// @desc    Delete user
// @route   PATCH /api/users/:id
// @access  Private | Admin
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) throw new AppError("User not found.", 404);

  await user.deleteOne();

  res.status(200).json({ message: "User deleted successfully." });
});
