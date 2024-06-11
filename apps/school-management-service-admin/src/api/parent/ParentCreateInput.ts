import { StudentCreateNestedManyWithoutParentsInput } from "./StudentCreateNestedManyWithoutParentsInput";

export type ParentCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  students?: StudentCreateNestedManyWithoutParentsInput;
};
