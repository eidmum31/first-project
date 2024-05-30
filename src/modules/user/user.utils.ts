import { TAcademicSemester } from '../academicSemester/acdemicSemester.interface';
import Students from '../student/student.model';
import User from './user.model';
const findLastStudent = async () => {
  const lastStudent = await User.findOne({}, { id: 1, _id: 0 }).sort({
    createdAt: -1,
  });
  console.log(lastStudent);
  return lastStudent ? (lastStudent.id as string) : undefined;
};

export const generateUserId = async (payload: TAcademicSemester | null) => {
  let currentId = (0).toString().padStart(4, '0');
  const lastStudentId = await findLastStudent();
  const lastStudentCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentStudentCode = payload?.code;
  const currentStudentYear = payload?.year;
  if (
    lastStudentCode === currentStudentCode &&
    lastStudentYear === currentStudentYear
  ) {
    currentId = (lastStudentId as string)?.substring(6);
  }
  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  console.log(incrementId);
  return `${payload?.year}${payload?.code}${incrementId}`;
};
