import { Attendance } from "../attendance/Attendance";
import { Exam } from "../exam/Exam";
import { Parent } from "../parent/Parent";
import { Reports } from "../reports/Reports";
import { SchoolFees } from "../schoolFees/SchoolFees";

export type Student = {
  address: string | null;
  attendances?: Array<Attendance>;
  classField: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  exams?: Array<Exam>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  parent?: Parent | null;
  reportsItems?: Array<Reports>;
  schoolFeesItems?: Array<SchoolFees>;
  updatedAt: Date;
};
