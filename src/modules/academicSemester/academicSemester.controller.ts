import express, { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import { catchAsync } from '../../app/utils/catchAsync';
import { academicSemesterServices } from './academicSemester.sevice';
import { academicSemesterModel } from './academicSemester.model';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicSemesterServices.createAcademicSemesterInDb(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  },
);

const getAllAcademicSemsters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await academicSemesterServices.getAllAcademicSemstersFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Semesters are fetched successfully',
      data: result,
    });
  },
);
const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { semesterId } = req.params;
    const result =
      await academicSemesterServices.getSingleAcademicSemesterFromDb(
        semesterId,
      );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Semester is fetched successfully',
      data: result,
    });
  },
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { semesterId } = req.params;
    const data = req.body;
    const result = await academicSemesterServices.updateAcademicSemesterInDb(
      semesterId,
      data,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Semester is updated successfully',
      data: result,
    });
  },
);
export const academicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemsters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
