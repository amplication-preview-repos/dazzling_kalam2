import { Module } from "@nestjs/common";
import { AccountantModuleBase } from "./base/accountant.module.base";
import { AccountantService } from "./accountant.service";
import { AccountantController } from "./accountant.controller";
import { AccountantResolver } from "./accountant.resolver";

@Module({
  imports: [AccountantModuleBase],
  controllers: [AccountantController],
  providers: [AccountantService, AccountantResolver],
  exports: [AccountantService],
})
export class AccountantModule {}
