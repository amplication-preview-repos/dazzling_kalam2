import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountantWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
