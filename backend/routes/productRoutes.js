import express from "express";

import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").get(getAllProducts);

router.route("/:id").get(checkObjectId, getProductById);

export default router;
