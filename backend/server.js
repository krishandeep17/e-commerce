import express from "express";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB

const app = express();

// Routes
app.use("/api/products", productRoutes);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
