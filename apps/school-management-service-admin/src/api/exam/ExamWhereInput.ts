import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExamWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  result?: FloatNullableFilter;
  student?: StudentWhereUniqueInput;
  subject?: StringNullableFilter;
};
