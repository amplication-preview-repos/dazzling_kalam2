import { Accountant as TAccountant } from "../api/accountant/Accountant";

export const ACCOUNTANT_TITLE_FIELD = "username";

export const AccountantTitle = (record: TAccountant): string => {
  return record.username?.toString() || String(record.id);
};
