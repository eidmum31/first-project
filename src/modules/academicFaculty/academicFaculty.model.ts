import { Schema, model } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const AcademicFacultySchema = new Schema<TAcademicFaculty>({
  name: { type: String, required: true, unique: true },
});
export const AcademicFacultyModel = model(
  'AcademicFaculty',
  AcademicFacultySchema,
);
