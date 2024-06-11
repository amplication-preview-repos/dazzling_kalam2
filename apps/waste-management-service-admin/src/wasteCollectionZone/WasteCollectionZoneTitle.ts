import { WasteCollectionZone as TWasteCollectionZone } from "../api/wasteCollectionZone/WasteCollectionZone";

export const WASTECOLLECTIONZONE_TITLE_FIELD = "name";

export const WasteCollectionZoneTitle = (
  record: TWasteCollectionZone
): string => {
  return record.name?.toString() || String(record.id);
};
