import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyInDb = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};
const getAllAcademicFacultiesFromDb = async () => {
  const result = await AcademicFacultyModel.find({});
  return result;
};
const getSingleAcademicFacultyFromDb = async (facultyId: string) => {
  const result = AcademicFacultyModel.findById(facultyId);
  return result;
};
const updateAcademicFacultyInDb = async (
  facultyId: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = AcademicFacultyModel.findByIdAndUpdate(facultyId, payload);
  return result;
};
export const academicFacultyServices = {
  updateAcademicFacultyInDb,
  getSingleAcademicFacultyFromDb,
  getAllAcademicFacultiesFromDb,
  createAcademicFacultyInDb,
};
