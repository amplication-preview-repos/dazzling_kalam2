import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WasteCollectionZoneServiceBase } from "./base/wasteCollectionZone.service.base";

@Injectable()
export class WasteCollectionZoneService extends WasteCollectionZoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
