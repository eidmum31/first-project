import { Schema, model, connect, Model, Types } from 'mongoose';
export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName?: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  academicDepartment:Types.ObjectId,
  name: TUserName;
  user: Types.ObjectId;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGurdian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  academicSemester: Types.ObjectId;
  isDeleted?: boolean;
};
// export type studentMethods = {
//   isUserExists(id: string): Promise<Student | null>;
// };
// export type StudentModel = Model<
//   Student,
//   Record<string, never>,
//   studentMethods
// >;
export interface StudentModel extends Model<Student> {
  isUserExists(id: string): Promise<Student | null>;
}
