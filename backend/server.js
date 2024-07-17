import express from "express";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB

const app = express();

// Routes
app.use("/api/products", productRoutes);

// Error handling
app.all("*", notFound); // Unhandled routes
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
