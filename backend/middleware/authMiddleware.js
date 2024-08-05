import jwt from "jsonwebtoken";
import { promisify } from "util";

import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";

// Middleware to protect routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token)
    throw new AppError(
      "You are not logged in! Please login to get access.",
      401
    );

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    res.clearCookie("jwt");

    throw new AppError("User no longer exists.", 401);
  }

  req.user = currentUser;

  next();
});

// Middleware to restrict to authorize users
export function authorize(...roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      next(
        new AppError("You do not have permission to perform this action.", 403)
      );
    }
  };
}
