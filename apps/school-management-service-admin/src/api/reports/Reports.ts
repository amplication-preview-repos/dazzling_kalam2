import { Student } from "../student/Student";

export type Reports = {
  content: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  student?: Student | null;
  title: string | null;
  updatedAt: Date;
};
