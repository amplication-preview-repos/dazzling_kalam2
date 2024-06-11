import * as graphql from "@nestjs/graphql";
import { WasteCollectionRequestResolverBase } from "./base/wasteCollectionRequest.resolver.base";
import { WasteCollectionRequest } from "./base/WasteCollectionRequest";
import { WasteCollectionRequestService } from "./wasteCollectionRequest.service";

@graphql.Resolver(() => WasteCollectionRequest)
export class WasteCollectionRequestResolver extends WasteCollectionRequestResolverBase {
  constructor(protected readonly service: WasteCollectionRequestService) {
    super(service);
  }
}
