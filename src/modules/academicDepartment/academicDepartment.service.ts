import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentModel } from './academicDepartmnet.modle';

const createAcademicDepartmentInDb = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartmentModel.create(payload);
  return result;
};
const getAllAcademicDepartmentsFromDb = async () => {
  const result = await AcademicDepartmentModel.find({});
  return result;
};
const getSingleAcademicDepartmentFromDb = async (facultyId: string) => {
  const result = AcademicDepartmentModel.findById(facultyId);
  return result;
};
const updateAcademicDepartmentInDb = async (
  facultyId: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = AcademicDepartmentModel.findOneAndUpdate({_id:facultyId}, payload);
  return result;
};
export const academicDepartmentServices = {
  updateAcademicDepartmentInDb,
  getSingleAcademicDepartmentFromDb,
  getAllAcademicDepartmentsFromDb,
  createAcademicDepartmentInDb,
};
