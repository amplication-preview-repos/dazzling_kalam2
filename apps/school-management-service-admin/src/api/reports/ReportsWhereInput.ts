import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type ReportsWhereInput = {
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
  title?: StringNullableFilter;
};
