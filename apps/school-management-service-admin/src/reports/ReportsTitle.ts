import { Reports as TReports } from "../api/reports/Reports";

export const REPORTS_TITLE_FIELD = "title";

export const ReportsTitle = (record: TReports): string => {
  return record.title?.toString() || String(record.id);
};
