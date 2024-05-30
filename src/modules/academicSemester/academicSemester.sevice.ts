import { academicSemesterNameCodeMapper } from './academicSemester.constants';
import { academicSemesterModel } from './academicSemester.model';
import { TAcademicSemester } from './acdemicSemester.interface';

const createAcademicSemesterInDb = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await academicSemesterModel.create(payload);
  return result;
};
const getAllAcademicSemstersFromDb = async () => {
  const result = await academicSemesterModel.find({});
  return result;
};
const getSingleAcademicSemesterFromDb = async (semesterId: string) => {
  const result = academicSemesterModel.findById(semesterId);
  return result;
};
const updateAcademicSemesterInDb = async (
  semesterId: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid semester code');
  }

  const result = academicSemesterModel.findByIdAndUpdate(semesterId, payload);
  return result;
};
export const academicSemesterServices = {
  createAcademicSemesterInDb,
  getAllAcademicSemstersFromDb,
  getSingleAcademicSemesterFromDb,
  updateAcademicSemesterInDb,
};
