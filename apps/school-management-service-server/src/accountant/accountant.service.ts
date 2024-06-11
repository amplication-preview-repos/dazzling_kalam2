import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountantServiceBase } from "./base/accountant.service.base";

@Injectable()
export class AccountantService extends AccountantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
