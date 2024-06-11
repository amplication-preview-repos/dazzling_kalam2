import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  rating?: IntNullableFilter;
  submittedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
