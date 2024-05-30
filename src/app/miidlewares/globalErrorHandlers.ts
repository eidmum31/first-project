import { NextFunction, Request, Response } from 'express';

export const globalErrorHandlers = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = 'Something went wrong';
  res.status(statusCode).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  });
};
