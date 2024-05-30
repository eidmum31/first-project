import {
  TAcademicCode,
  TAcademicName,
  TAcademicSemesterNameCodeMapper,
  TMonthName,
} from './acdemicSemester.interface';

export const AcademicName: TAcademicName[] = ['Autumn', 'Summer', 'Fall'];
export const AcademicCode: TAcademicCode[] = ['01', '02', '03'];
export const Months: TMonthName[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
