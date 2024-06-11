import { StudentUpdateManyWithoutParentsInput } from "./StudentUpdateManyWithoutParentsInput";

export type ParentUpdateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  students?: StudentUpdateManyWithoutParentsInput;
};
