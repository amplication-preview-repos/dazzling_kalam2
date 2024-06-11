import { Student } from "../student/Student";

export type SchoolFees = {
  amount: number | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  student?: Student | null;
  updatedAt: Date;
};
