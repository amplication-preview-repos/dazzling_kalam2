import { SortOrder } from "../../util/SortOrder";

export type SchoolFeesOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
