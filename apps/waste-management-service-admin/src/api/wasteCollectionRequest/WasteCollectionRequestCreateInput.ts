import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WasteCollectionRequestCreateInput = {
  location?: string | null;
  requestedAt?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
