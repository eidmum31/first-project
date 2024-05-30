import express, { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import { sendResponse } from '../../app/utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;

    const result = await UserServices.createStudentInDb(student, password);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'sudent is created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
