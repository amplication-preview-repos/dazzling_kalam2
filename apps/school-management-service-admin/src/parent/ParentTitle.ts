import { Parent as TParent } from "../api/parent/Parent";

export const PARENT_TITLE_FIELD = "firstName";

export const ParentTitle = (record: TParent): string => {
  return record.firstName?.toString() || String(record.id);
};
