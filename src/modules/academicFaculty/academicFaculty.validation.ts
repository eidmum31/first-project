import z from 'zod';

const createAcdemicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Name must be a string' }),
  }),
});
const updateAcdemicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Name must be a string' }),
  }),
});

export const academicFacultyValidationSchema = {
  createAcdemicFacultyValidationSchema,
  updateAcdemicFacultyValidationSchema,
};
