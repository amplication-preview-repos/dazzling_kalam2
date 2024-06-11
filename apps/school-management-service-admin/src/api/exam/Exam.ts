import { Student } from "../student/Student";

export type Exam = {
  createdAt: Date;
  date: Date | null;
  id: string;
  result: number | null;
  student?: Student | null;
  subject: string | null;
  updatedAt: Date;
};
