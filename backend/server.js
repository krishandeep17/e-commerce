import express from "express";

import connectDB from "./config/db.js";

const port = process.env.PORT || 3000;

// Connect to database
connectDB();

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
