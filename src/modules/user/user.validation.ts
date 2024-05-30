import z from 'zod';
const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .min(6, { message: 'Password must be 6 or more characters long' })
    .max(20, 'Password can not be morw than 20 characters')
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
