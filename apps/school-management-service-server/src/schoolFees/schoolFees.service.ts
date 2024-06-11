import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SchoolFeesServiceBase } from "./base/schoolFees.service.base";

@Injectable()
export class SchoolFeesService extends SchoolFeesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
