import z from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Name must be a string' }),
    academicFaculty: z.string(),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Name must be a string' }).optional(),
    academicFaculty: z.string().optional(),
  }),
});

export const academicDepartmentValidationSchema = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
