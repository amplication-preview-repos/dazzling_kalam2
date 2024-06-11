import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  address?: SortOrder;
  classField?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  parentId?: SortOrder;
  updatedAt?: SortOrder;
};
