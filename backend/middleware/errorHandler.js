export default function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let isOperational = err.isOperational || false;

  // Handle Invalid Database IDs
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
    isOperational = true;
  }

  // Handle Duplicate Database Fields
  if (err.code === 11000) {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

    statusCode = 400;
    message = `Duplicate field value: ${value}. Please use another value!`;
    isOperational = true;
  }

  // Handle Mongoose Validation Errors
  if (err.name === "ValidationError") {
    const errorMessages = Object.values(err.errors).map(
      (error) => error.message
    );

    statusCode = 400;
    message = `Invalid input data. ${errorMessages.join(". ")}`;
    isOperational = true;
  }

  if (process.env.NODE_ENV === "development") {
    res.status(statusCode).json({
      name: err.name,
      message,
      error: err,
      stack: err.stack,
    });
  } else {
    !isOperational && console.error(`ERROR: ${err}`);

    res.status(statusCode).json({
      message: isOperational ? message : "Something went wrong!",
    });
  }
}
