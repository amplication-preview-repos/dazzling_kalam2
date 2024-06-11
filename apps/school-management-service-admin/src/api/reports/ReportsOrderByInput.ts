import { SortOrder } from "../../util/SortOrder";

export type ReportsOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
