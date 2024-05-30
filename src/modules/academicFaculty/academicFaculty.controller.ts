import express, { NextFunction, Request, Response } from 'express';
import { sendResponse } from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import { catchAsync } from '../../app/utils/catchAsync';
import { academicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await academicFacultyServices.createAcademicFacultyInDb(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Faculty is created successfully',
      data: result,
    });
  },
);

const getAllAcademicFaculties = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result =
      await academicFacultyServices.getAllAcademicFacultiesFromDb();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic Faculties are fetched successfully',
      data: result,
    });
  },
);
const getSingleAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { facultyId } = req.params;
    const result =
      await academicFacultyServices.getSingleAcademicFacultyFromDb(facultyId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic faculty is fetched successfully',
      data: result,
    });
  },
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { facultyId } = req.params;
    const data = req.body;
    const result = await academicFacultyServices.updateAcademicFacultyInDb(
      facultyId,
      data,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'Academic faculty is updated successfully',
      data: result,
    });
  },
);
export const academicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
