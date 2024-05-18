import { Student } from './student.interface';
import Students from './student.model';

const createStudentInDb = async (student: Student) => {
  // const newStudent = new Students(student);

  // if (await newStudent.isUserExists(student.id)) {
  //   throw new Error('User already exits');
  // }
  if (await Students.isUserExists(student.id)) {
    throw new Error('User already exits');
  }

  const result = await Students.create(student);
  return result;
};

const getAllStudentsFromDb = async () => {
  const result = await Students.find();
  return result;
};
const getSingleStudentFromDb = async (id: string) => {
  const result = await Students.findOne({ id: id });
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
  createStudentInDb,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  deleteStudentFromDb,
};
