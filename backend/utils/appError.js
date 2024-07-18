export default class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = true; // All the errors that we created are operational errors

    // Maintain proper stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
