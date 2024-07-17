export function notFound(req, res, next) {
  const error = new Error(`Can't find ${req.originalUrl} on this server`);

  res.status(404);
  next(error);
}

export function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message;
  const stack = process.env.NODE_ENV === "development" ? err.stack : null;

  res.status(statusCode).json({ message, stack });
}
