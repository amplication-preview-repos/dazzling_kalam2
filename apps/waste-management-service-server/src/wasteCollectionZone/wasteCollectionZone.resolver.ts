import * as graphql from "@nestjs/graphql";
import { WasteCollectionZoneResolverBase } from "./base/wasteCollectionZone.resolver.base";
import { WasteCollectionZone } from "./base/WasteCollectionZone";
import { WasteCollectionZoneService } from "./wasteCollectionZone.service";

@graphql.Resolver(() => WasteCollectionZone)
export class WasteCollectionZoneResolver extends WasteCollectionZoneResolverBase {
  constructor(protected readonly service: WasteCollectionZoneService) {
    super(service);
  }
}
