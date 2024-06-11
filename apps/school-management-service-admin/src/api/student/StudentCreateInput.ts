import { AttendanceCreateNestedManyWithoutStudentsInput } from "./AttendanceCreateNestedManyWithoutStudentsInput";
import { ExamCreateNestedManyWithoutStudentsInput } from "./ExamCreateNestedManyWithoutStudentsInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ReportsCreateNestedManyWithoutStudentsInput } from "./ReportsCreateNestedManyWithoutStudentsInput";
import { SchoolFeesCreateNestedManyWithoutStudentsInput } from "./SchoolFeesCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  address?: string | null;
  attendances?: AttendanceCreateNestedManyWithoutStudentsInput;
  classField?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  exams?: ExamCreateNestedManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
  parent?: ParentWhereUniqueInput | null;
  reportsItems?: ReportsCreateNestedManyWithoutStudentsInput;
  schoolFeesItems?: SchoolFeesCreateNestedManyWithoutStudentsInput;
};
