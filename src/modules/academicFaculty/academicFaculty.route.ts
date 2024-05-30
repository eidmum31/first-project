import express from 'express';
import { academicFacultyControllers } from './academicFaculty.controller';
import { validateRequest } from '../../app/miidlewares/validateRequest';
import { academicFacultyValidationSchema } from './academicFaculty.validation';

const router = express.Router();

router.get('/', academicFacultyControllers.getAllAcademicFaculties);
router.get('/:facultyId', academicFacultyControllers.getSingleAcademicFaculty);
router.post(
  '/create-academic-faculty',
  validateRequest.ValidateRequest(
    academicFacultyValidationSchema.createAcdemicFacultyValidationSchema,
  ),
  academicFacultyControllers.createAcademicFaculty,
);
router.patch(
  '/:facultyId',
  validateRequest.ValidateRequest(
    academicFacultyValidationSchema.updateAcdemicFacultyValidationSchema,
  ),
  academicFacultyControllers.updateAcademicFaculty,
);
export const academicFacultyRouter = router;
