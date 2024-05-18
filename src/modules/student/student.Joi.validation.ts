import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.empty': 'First name is a required field',
      'string.max': 'Length must be under 20',
      'string.pattern.base': '{#value} is not in the capitalize format',
    }),
  lastName: Joi.string().optional(),
  middleName: Joi.string()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.empty': 'Middle name is a required field',
      'string.pattern.base': '{#value} is not into valid format',
    }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father name is a required field',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father occupation is a required field',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'Father contact number is a required field',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother name is a required field',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother occupation is a required field',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'Mother contact number is a required field',
  }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local guardian name is a required field',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Local guardian occupation is a required field',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Local guardian contact number is a required field',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Local guardian address is a required field',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'ID is a required field',
  }),
  name: userNameSchema.required().messages({
    'object.base': 'Name is a required field',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'string.empty': 'Gender is a required field',
    'any.only': '{#value} is not supported',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is a required field',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is a required field',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is a required field',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'string.empty': 'Blood group is a required field',
      'any.only': '{#value} is not supported',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is a required field',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is a required field',
  }),
  guardian: guardianSchema.required().messages({
    'object.base': 'Guardian is a required field',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'object.base': 'Local guardian is a required field',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email must be given',
    'string.email': '{#value} is not a valid email',
  }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': '{#value} is not supported',
  }),
});

export default studentValidationSchema;
