import express from 'express';

import { validateRequest } from '../../app/miidlewares/validateRequest';
import { academicDepartmentControllers } from './academicDepartment.controller';
import { academicDepartmentValidationSchema } from './academicDepartment.validation';

const router = express.Router();

router.get('/', academicDepartmentControllers.getAllAcademicDepartments);
router.get(
  '/:departmentId',
  academicDepartmentControllers.getSingleAcademicDepartment,
);
router.post(
  '/create-academic-department',
  validateRequest.ValidateRequest(
    academicDepartmentValidationSchema.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.createAcademicDepartment,
);
router.patch(
  '/:departmentId',
  validateRequest.ValidateRequest(
    academicDepartmentValidationSchema.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.updateAcademicDepartment,
);
export const academicDeparmentRouter = router;
