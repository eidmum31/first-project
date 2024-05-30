export type TMonthName =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export type TAcademicName = 'Autumn' | 'Summer' | 'Fall';
export type TAcademicCode = '01' | '02' | '03';
export type TAcademicSemester = {
  name: TAcademicName;
  year: String;
  code: TAcademicCode;
  startMonth: TMonthName;
  endMonth: TMonthName;
};
export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};
