import { Module } from "@nestjs/common";
import { WasteCollectionZoneModuleBase } from "./base/wasteCollectionZone.module.base";
import { WasteCollectionZoneService } from "./wasteCollectionZone.service";
import { WasteCollectionZoneController } from "./wasteCollectionZone.controller";
import { WasteCollectionZoneResolver } from "./wasteCollectionZone.resolver";

@Module({
  imports: [WasteCollectionZoneModuleBase],
  controllers: [WasteCollectionZoneController],
  providers: [WasteCollectionZoneService, WasteCollectionZoneResolver],
  exports: [WasteCollectionZoneService],
})
export class WasteCollectionZoneModule {}
