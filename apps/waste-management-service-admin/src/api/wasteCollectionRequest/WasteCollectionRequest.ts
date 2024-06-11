import { User } from "../user/User";

export type WasteCollectionRequest = {
  createdAt: Date;
  id: string;
  location: string | null;
  requestedAt: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
