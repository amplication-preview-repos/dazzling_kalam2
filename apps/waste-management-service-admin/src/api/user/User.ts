import { Feedback } from "../feedback/Feedback";
import { JsonValue } from "type-fest";
import { WasteCollectionRequest } from "../wasteCollectionRequest/WasteCollectionRequest";

export type User = {
  createdAt: Date;
  email: string | null;
  feedbacks?: Array<Feedback>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wasteCollectionRequests?: Array<WasteCollectionRequest>;
};
