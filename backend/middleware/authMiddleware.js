import jwt from "jsonwebtoken";
import { promisify } from "util";

import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.cookies.jwt) token = req.cookies.jwt;

  if (!token)
    throw new AppError(
      "You are not logged in! Please login to get access",
      401
    );

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  if (!currentUser) throw new AppError("User no longer exits.", 401);

  req.user = currentUser;

  next();
});
