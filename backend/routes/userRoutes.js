import express from "express";

import { updatePassword } from "../controllers/authController.js";
import {
  createUser,
  deleteCurrentUser,
  deleteUser,
  getAllUsers,
  getCurrentUser,
  getUser,
  updateCurrentUser,
  updateUser,
} from "../controllers/userController.js";
import { authorize, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Middleware to protect routes
router.use(protect);

router.get("/me", getCurrentUser);
router.patch("/updateMe", updateCurrentUser);
router.patch("/updateMyPassword", updatePassword);
router.delete("/deleteMe", deleteCurrentUser);

// Middleware to restrict authorized users
router.use(authorize("admin"));

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
