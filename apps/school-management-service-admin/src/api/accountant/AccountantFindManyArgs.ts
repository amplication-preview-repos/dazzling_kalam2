import { AccountantWhereInput } from "./AccountantWhereInput";
import { AccountantOrderByInput } from "./AccountantOrderByInput";

export type AccountantFindManyArgs = {
  where?: AccountantWhereInput;
  orderBy?: Array<AccountantOrderByInput>;
  skip?: number;
  take?: number;
};
