import { WasteCollectionRequest as TWasteCollectionRequest } from "../api/wasteCollectionRequest/WasteCollectionRequest";

export const WASTECOLLECTIONREQUEST_TITLE_FIELD = "location";

export const WasteCollectionRequestTitle = (
  record: TWasteCollectionRequest
): string => {
  return record.location?.toString() || String(record.id);
};
