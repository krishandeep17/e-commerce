import express from "express";

const port = process.env.PORT || 3000;

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
