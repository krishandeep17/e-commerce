import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) throw new AppError("User already exists", 400);

  const newUser = await User.create({ firstName, lastName, email, password });

  if (!newUser) throw new AppError("Invalid user data", 400);

  generateToken(res, newUser._id);

  res.status(201).json(newUser.removePassword());
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new AppError("Please provide email and password", 400);

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.matchPassword(password)))
    throw new AppError("Incorrect email or password", 401);

  generateToken(res, user.id);

  res.status(200).json(user.removePassword());
});

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "Logged out successfully" });
});
