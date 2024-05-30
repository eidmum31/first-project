import { Request, Response } from 'express';
type TResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};
export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    success: true,
    message: data.message,
    data: data.data,
  });
};
