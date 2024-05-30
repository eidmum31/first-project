import { NextFunction, Request, RequestHandler, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';
import { sendResponse } from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import { catchAsync } from '../../app/utils/catchAsync';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await studentServices.getAllStudentsFromDb();
  res.status(200).json({
    success: true,
    message: 'Students are retrieved successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFromDb(studentId);
  res.status(200).json({
    success: true,
    message: 'Student is retrieved successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDb(studentId);
  res.status(200).json({
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
