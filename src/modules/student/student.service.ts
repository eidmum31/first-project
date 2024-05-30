import { Student } from './student.interface';
import Students from './student.model';

const getAllStudentsFromDb = async () => {
  const result = await Students.find().populate({
    path:"academicDepartment",
    populate:{
      path:"academicFaculty"
    }
  }).populate("academicSemester");
  return result;
};
const getSingleStudentFromDb = async (id: string) => {
  const result = await Students.findOne({ id: id }).populate({
    path:"academicDepartment",
    populate:{
      path:"academicFaculty"
    }
  }).populate("academicSemester");
  return result;
};
const deleteStudentFromDb = async (id: string) => {
  const result = await Students.updateOne(
    { id: id },
    { $set: { isDeleted: true } },
  );
  return result;
};

export const studentServices = {
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  deleteStudentFromDb,
};
