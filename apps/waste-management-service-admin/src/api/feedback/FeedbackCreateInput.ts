import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  message?: string | null;
  rating?: number | null;
  submittedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
