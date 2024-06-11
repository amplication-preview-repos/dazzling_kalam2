import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountantService } from "./accountant.service";
import { AccountantControllerBase } from "./base/accountant.controller.base";

@swagger.ApiTags("accountants")
@common.Controller("accountants")
export class AccountantController extends AccountantControllerBase {
  constructor(protected readonly service: AccountantService) {
    super(service);
  }
}
