import express from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);

// Middleware to restrict authorized users
router.use(protect, authorize("admin", "seller"));

router.post("/", createProduct);
router.route("/:id").patch(updateProduct).delete(deleteProduct);

export default router;
