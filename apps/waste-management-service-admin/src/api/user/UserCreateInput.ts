import { FeedbackCreateNestedManyWithoutUsersInput } from "./FeedbackCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WasteCollectionRequestCreateNestedManyWithoutUsersInput } from "./WasteCollectionRequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  wasteCollectionRequests?: WasteCollectionRequestCreateNestedManyWithoutUsersInput;
};
