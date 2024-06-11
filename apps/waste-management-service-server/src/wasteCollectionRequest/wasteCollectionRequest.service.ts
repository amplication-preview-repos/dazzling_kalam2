import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WasteCollectionRequestServiceBase } from "./base/wasteCollectionRequest.service.base";

@Injectable()
export class WasteCollectionRequestService extends WasteCollectionRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
