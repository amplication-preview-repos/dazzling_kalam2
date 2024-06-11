import { SchoolFees as TSchoolFees } from "../api/schoolFees/SchoolFees";

export const SCHOOLFEES_TITLE_FIELD = "id";

export const SchoolFeesTitle = (record: TSchoolFees): string => {
  return record.id?.toString() || String(record.id);
};
