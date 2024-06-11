import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ReportsCreateInput = {
  content?: string | null;
  date?: Date | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
