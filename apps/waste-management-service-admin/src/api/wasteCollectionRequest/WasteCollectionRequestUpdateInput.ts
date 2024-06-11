import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WasteCollectionRequestUpdateInput = {
  location?: string | null;
  requestedAt?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
