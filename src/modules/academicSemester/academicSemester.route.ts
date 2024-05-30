import express from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import { validateRequest } from '../../app/miidlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', academicSemesterControllers.getAllAcademicSemsters);
router.get(
  '/:semesterId',
  academicSemesterControllers.getSingleAcademicSemester,
);
router.post(
  '/create-academic-semester',
  validateRequest.ValidateRequest(
    academicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.createAcademicSemester,
);
router.patch(
  '/:semesterId',
  validateRequest.ValidateRequest(
    academicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateAcademicSemester,
);
export const academicSemesterRouter = router;
