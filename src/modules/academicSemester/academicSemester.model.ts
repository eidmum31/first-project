import { Schema, model } from 'mongoose';
import {
  TAcademicCode,
  TAcademicName,
  TAcademicSemester,
  TMonthName,
} from './acdemicSemester.interface';
import {
  AcademicCode,
  AcademicName,
  Months,
} from './academicSemester.constants';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: { type: String, required: true, enum: AcademicName },
  year: { type: String, required: true },
  code: { type: String, enum: AcademicCode },
  startMonth: {
    type: String,
    enum: Months,
  },
  endMonth: {
    type: String,
    enum: Months,
  },
});
academicSemesterSchema.pre('save', async function (next) {
  const isSemestarExists = await academicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemestarExists) {
    throw new Error('Semester already exits');
  }
  next();
});
export const academicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
