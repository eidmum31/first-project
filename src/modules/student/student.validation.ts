import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is a required field' })
    .max(20, { message: 'Length must be under 20' })
    .refine(
      (value) => value === value.charAt(0).toUpperCase() + value.slice(1),
      {
        message: 'First name must be capitalized',
      },
    ),
  lastName: z.string().optional(),
  middleName: z
    .string()
    .min(1, { message: 'Middle name is a required field' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'Middle name must contain only alphabetic characters',
    }),
});

const guardianSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is a required field' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is a required field' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is a required field' }),
  motherName: z.string().min(1, { message: 'Mother name is a required field' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is a required field' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is a required field' }),
});

const localGuardianSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Local guardian name is a required field' }),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is a required field' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is a required field' }),
  address: z
    .string()
    .min(1, { message: 'Local guardian address is a required field' }),
});

const studentSchema = z.object({
  id: z.string().min(1, { message: 'ID is a required field' }),
  password: z.string().max(20, { message: 'password must be within 20' }),
  name: userNameSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender is not supported' }),
  }),
  dateOfBirth: z
    .string()
    .min(1, { message: 'Date of birth is a required field' }),
  contactNo: z
    .string()
    .min(1, { message: 'Contact number is a required field' }),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'Emergency contact number is a required field' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    errorMap: () => ({ message: 'Blood group is not supported' }),
  }),
  presentAddress: z
    .string()
    .min(1, { message: 'Present address is a required field' }),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is a required field' }),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  email: z
    .string()
    .min(1, { message: 'Email must be given' })
    .email({ message: 'Email is not valid' }),
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean().optional(),
});

export default studentSchema;
