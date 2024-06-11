import { SchoolFeesWhereInput } from "./SchoolFeesWhereInput";
import { SchoolFeesOrderByInput } from "./SchoolFeesOrderByInput";

export type SchoolFeesFindManyArgs = {
  where?: SchoolFeesWhereInput;
  orderBy?: Array<SchoolFeesOrderByInput>;
  skip?: number;
  take?: number;
};
