import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ReportsUpdateInput = {
  content?: string | null;
  date?: Date | null;
  student?: StudentWhereUniqueInput | null;
  title?: string | null;
};
