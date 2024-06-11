import { Student } from "../student/Student";

export type Parent = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  students?: Array<Student>;
  updatedAt: Date;
};
