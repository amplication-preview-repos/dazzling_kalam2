import { Module } from "@nestjs/common";
import { WasteCollectionRequestModuleBase } from "./base/wasteCollectionRequest.module.base";
import { WasteCollectionRequestService } from "./wasteCollectionRequest.service";
import { WasteCollectionRequestController } from "./wasteCollectionRequest.controller";
import { WasteCollectionRequestResolver } from "./wasteCollectionRequest.resolver";

@Module({
  imports: [WasteCollectionRequestModuleBase],
  controllers: [WasteCollectionRequestController],
  providers: [WasteCollectionRequestService, WasteCollectionRequestResolver],
  exports: [WasteCollectionRequestService],
})
export class WasteCollectionRequestModule {}
