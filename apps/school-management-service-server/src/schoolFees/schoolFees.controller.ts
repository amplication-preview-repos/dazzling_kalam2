import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SchoolFeesService } from "./schoolFees.service";
import { SchoolFeesControllerBase } from "./base/schoolFees.controller.base";

@swagger.ApiTags("schoolFees")
@common.Controller("schoolFees")
export class SchoolFeesController extends SchoolFeesControllerBase {
  constructor(protected readonly service: SchoolFeesService) {
    super(service);
  }
}
