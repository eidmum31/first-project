import express, { Request, Response } from 'express';
import { UserControllers } from './user.controller';
import studentSchema from '../student/student.validation';
import { validateRequest } from '../../app/miidlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest.ValidateRequest(studentSchema),
  UserControllers.createStudent,
);

export const UserRouter = router;
