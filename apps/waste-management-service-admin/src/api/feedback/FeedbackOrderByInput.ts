import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  rating?: SortOrder;
  submittedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
