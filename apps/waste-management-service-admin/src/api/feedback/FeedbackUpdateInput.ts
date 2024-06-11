import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  message?: string | null;
  rating?: number | null;
  submittedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
