import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WasteCollectionRequestService } from "./wasteCollectionRequest.service";
import { WasteCollectionRequestControllerBase } from "./base/wasteCollectionRequest.controller.base";

@swagger.ApiTags("wasteCollectionRequests")
@common.Controller("wasteCollectionRequests")
export class WasteCollectionRequestController extends WasteCollectionRequestControllerBase {
  constructor(protected readonly service: WasteCollectionRequestService) {
    super(service);
  }
}
