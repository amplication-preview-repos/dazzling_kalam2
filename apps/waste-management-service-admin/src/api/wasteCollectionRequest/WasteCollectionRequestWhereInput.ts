import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WasteCollectionRequestWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  requestedAt?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
