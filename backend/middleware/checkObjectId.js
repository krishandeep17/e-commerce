import { isValidObjectId } from "mongoose";

import AppError from "../utils/appError.js";

export default function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.id))
    return next(new AppError(`Invalid ObjectId: ${req.params.id}`));

  next();
}
