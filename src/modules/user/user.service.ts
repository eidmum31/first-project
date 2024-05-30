import config from '../../app/config';
import { academicSemesterModel } from '../academicSemester/academicSemester.model';
import { TAcademicSemester } from '../academicSemester/acdemicSemester.interface';
import { Student } from '../student/student.interface';
import Students from '../student/student.model';
import { TUser } from './user.interface';
import User from './user.model';
import { generateUserId } from './user.utils';

const createStudentInDb = async (payload: Student, password: string) => {
  const user: Partial<TUser> = {};
  if (!password) {
    user.password = config.defaultPaasword;
  } else {
    user.password = password;
  }
  const admissionSemester = await academicSemesterModel.findById(
    payload.academicSemester,
  );
  user.id = await generateUserId(admissionSemester);
  user.role = 'student';
  const result = await User.create(user);
  if (Object.keys(result).length) {
    payload.id = result.id;
    payload.user = result._id;
    const newStudent = await Students.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentInDb,
};
