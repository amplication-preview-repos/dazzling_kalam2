import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { WasteCollectionRequestListRelationFilter } from "../wasteCollectionRequest/WasteCollectionRequestListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  wasteCollectionRequests?: WasteCollectionRequestListRelationFilter;
};
