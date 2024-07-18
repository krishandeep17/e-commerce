export default function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const status = `${statusCode}`.startsWith("4") ? "fail" : "error";

  if (process.env.NODE_ENV === "development") {
    return res.status(statusCode).json({
      status,
      name: err.name,
      message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "production" && err.isOperational) {
    res.status(statusCode).json({ status, message });
  } else {
    console.error(`ERROR: ${err}`);
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
}
