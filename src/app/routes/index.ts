import express from 'express';
import { StudentRoutes } from '../../modules/student/student.route';
import { UserRouter } from '../../modules/user/user.route';
import path from 'path';
import { academicSemesterRouter } from '../../modules/academicSemester/academicSemester.route';
import { academicFacultyRouter } from '../../modules/academicFaculty/academicFaculty.route';
import { academicDeparmentRouter } from '../../modules/academicDepartment/academicDepartment.route';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouter,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRouter,
  },

  {
    path: '/academic-departments',
    route: academicDeparmentRouter,
  },
];
moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

export default router;
