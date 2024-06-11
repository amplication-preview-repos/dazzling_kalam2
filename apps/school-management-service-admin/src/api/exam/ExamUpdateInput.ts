import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ExamUpdateInput = {
  date?: Date | null;
  result?: number | null;
  student?: StudentWhereUniqueInput | null;
  subject?: string | null;
};
