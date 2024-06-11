import { AttendanceUpdateManyWithoutStudentsInput } from "./AttendanceUpdateManyWithoutStudentsInput";
import { ExamUpdateManyWithoutStudentsInput } from "./ExamUpdateManyWithoutStudentsInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ReportsUpdateManyWithoutStudentsInput } from "./ReportsUpdateManyWithoutStudentsInput";
import { SchoolFeesUpdateManyWithoutStudentsInput } from "./SchoolFeesUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  address?: string | null;
  attendances?: AttendanceUpdateManyWithoutStudentsInput;
  classField?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  exams?: ExamUpdateManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
  parent?: ParentWhereUniqueInput | null;
  reportsItems?: ReportsUpdateManyWithoutStudentsInput;
  schoolFeesItems?: SchoolFeesUpdateManyWithoutStudentsInput;
};
