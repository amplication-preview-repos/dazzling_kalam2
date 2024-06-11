import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WasteCollectionZoneService } from "./wasteCollectionZone.service";
import { WasteCollectionZoneControllerBase } from "./base/wasteCollectionZone.controller.base";

@swagger.ApiTags("wasteCollectionZones")
@common.Controller("wasteCollectionZones")
export class WasteCollectionZoneController extends WasteCollectionZoneControllerBase {
  constructor(protected readonly service: WasteCollectionZoneService) {
    super(service);
  }
}
