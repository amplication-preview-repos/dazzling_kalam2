import { WasteCollectionRequestWhereInput } from "./WasteCollectionRequestWhereInput";
import { WasteCollectionRequestOrderByInput } from "./WasteCollectionRequestOrderByInput";

export type WasteCollectionRequestFindManyArgs = {
  where?: WasteCollectionRequestWhereInput;
  orderBy?: Array<WasteCollectionRequestOrderByInput>;
  skip?: number;
  take?: number;
};
