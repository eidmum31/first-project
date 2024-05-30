import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  Student,
  StudentModel,
  TGurdian,
  TLocalGuardian,
  TUserName,
} from './student.interface';
import validator from 'validator';
import { NextFunction } from 'express';
import config from '../../app/config';
import { boolean, date } from 'joi';
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is a required field'],
    trim: true,
    maxlength: [20, 'Length must be under 20'],
    validate: {
      validator: function (value: string) {
        return value === value.charAt(0).toUpperCase() + value.slice(1);
      },
      message: '{VALUE} is not in the capitalize format',
    },
  },
  lastName: { type: String },
  middleName: {
    type: String,
    required: [true, 'Middle name is a required field'],
    validate: {
      validator: function (value: string) {
        return validator.isAlpha(value);
      },
      message: '{VALUE} is not into valid format',
    },
  },
});

const guardianSchema = new Schema<TGurdian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is a required field'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is a required field'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father contact number is a required field'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is a required field'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is a required field'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother contact number is a required field'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Local guardian name is a required field'],
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is a required field'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is a required field'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is a required field'],
  },
});

const studentSchema = new Schema<Student, StudentModel>(
  {
    id: {
      type: String,
      unique: true,
      required: [true, 'ID is a required field'],
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is a required field'],
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Gender is a required field'],
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is a required field'],
    },
    contactNo: {
      type: String,
      required: [true, 'Contact number is a required field'],
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicSemester',
    },
    academicDepartment:{
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicDepartment',
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency contact number is a required field'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'Blood group is a required field'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present address is a required field'],
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is a required field'],
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian is a required field'],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local guardian is a required field'],
    },
    email: {
      type: String,
      required: [true, 'Email must be given'],
      unique: true,
      validate: {
        validator: function (value: string) {
          return validator.isEmail(value);
        },
        message: '{VALUE} is not a valid email',
      },
    },
    isDeleted: { type: Boolean, default: false },
    profileImg: String,

    user: {
      type: Schema.Types.ObjectId,
      unique: true,
      required: [true, 'User id is a required field'],
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);
// studentSchema.methods.isUserExists = async function (id: string) {
//   const result = await Students.findOne({ id });
//   return result;
// };
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});
studentSchema.statics.isUserExists = async function (id: string) {
  const result = await Students.findOne({ id });
  return result;
};
// studentSchema.pre('save', async function (next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this;
//   user.password = await bcrypt.hash(user.password, Number(config.salt));
//   next();
// });

// studentSchema.post('save', function (doc, next) {
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   doc.password = '';
//   next();
// });

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: false });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $eq: false } });
  next();
});

studentSchema.post('save', function () {
  console.log('After saving');
});
const Students = model<Student, StudentModel>('Student', studentSchema);

export default Students;
