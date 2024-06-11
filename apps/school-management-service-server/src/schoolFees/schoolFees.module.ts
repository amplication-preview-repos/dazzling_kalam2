import { Module } from "@nestjs/common";
import { SchoolFeesModuleBase } from "./base/schoolFees.module.base";
import { SchoolFeesService } from "./schoolFees.service";
import { SchoolFeesController } from "./schoolFees.controller";
import { SchoolFeesResolver } from "./schoolFees.resolver";

@Module({
  imports: [SchoolFeesModuleBase],
  controllers: [SchoolFeesController],
  providers: [SchoolFeesService, SchoolFeesResolver],
  exports: [SchoolFeesService],
})
export class SchoolFeesModule {}
