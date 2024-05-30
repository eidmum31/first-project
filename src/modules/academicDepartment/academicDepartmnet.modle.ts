import { Schema, model } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

const AcademicDepartmentSchema = new Schema<TAcademicDepartment>({
  name: { type: String, required: true, unique: true },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'AcademicFaculty',
  },
});
AcademicDepartmentSchema.pre('save',async function(next){
    const isDepartmentExists=await AcademicDepartmentModel.findOne({name:this.name});
    if(isDepartmentExists){
        throw new Error("Department already exists");
    }
    next();
})
AcademicDepartmentSchema.pre("findOneAndUpdate",async function(next){
    const query=this.getQuery();
    const isDepartmentExists=await AcademicDepartmentModel.findOne(query);
    if(!isDepartmentExists){
        throw new Error("Department does not exist");
    }
    next();
   
})
export const AcademicDepartmentModel = model(
  'AcademicDepartment',
  AcademicDepartmentSchema,
);
