import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExamListRelationFilter } from "../exam/ExamListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ReportsListRelationFilter } from "../reports/ReportsListRelationFilter";
import { SchoolFeesListRelationFilter } from "../schoolFees/SchoolFeesListRelationFilter";

export type StudentWhereInput = {
  address?: StringNullableFilter;
  attendances?: AttendanceListRelationFilter;
  classField?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  exams?: ExamListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  parent?: ParentWhereUniqueInput;
  reportsItems?: ReportsListRelationFilter;
  schoolFeesItems?: SchoolFeesListRelationFilter;
};
