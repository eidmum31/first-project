import express, { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import { catchAsync } from '../../app/utils/catchAsync';
import { academicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await academicDepartmentServices.createAcademicDepartmentInDb(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Department is created successfully',
      data: result,
    });
  },
);

const getAllAcademicDepartments = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await academicDepartmentServices.getAllAcademicDepartmentsFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic departments are fetched successfully',
      data: result,
    });
  },
);
const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { departmentId } = req.params;
    const result =
      await academicDepartmentServices.getSingleAcademicDepartmentFromDb(
        departmentId,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic department is fetched successfully',
      data: result,
    });
  },
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { departmentId } = req.params;
    const data = req.body;
    const result =
      await academicDepartmentServices.updateAcademicDepartmentInDb(
        departmentId,
        data,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic department is updated successfully',
      data: result,
    });
  },
);
export const academicDepartmentControllers = {
  updateAcademicDepartment,
  getSingleAcademicDepartment,
  getAllAcademicDepartments,
  createAcademicDepartment,
};
