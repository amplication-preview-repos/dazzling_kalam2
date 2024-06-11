import { User } from "../user/User";

export type Feedback = {
  createdAt: Date;
  id: string;
  message: string | null;
  rating: number | null;
  submittedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
