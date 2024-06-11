import { FeedbackUpdateManyWithoutUsersInput } from "./FeedbackUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WasteCollectionRequestUpdateManyWithoutUsersInput } from "./WasteCollectionRequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  wasteCollectionRequests?: WasteCollectionRequestUpdateManyWithoutUsersInput;
};
