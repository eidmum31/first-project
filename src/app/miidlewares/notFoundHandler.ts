import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

export const notFoundHandlers = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = httpStatus.NOT_FOUND;
  const message = 'Route not found';
  res.status(statusCode).json({
    success: false,
    message: message,
    error: '',
  });
};
