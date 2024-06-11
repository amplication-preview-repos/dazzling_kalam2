import { SortOrder } from "../../util/SortOrder";

export type WasteCollectionRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  requestedAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
