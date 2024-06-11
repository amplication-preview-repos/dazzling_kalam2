import * as graphql from "@nestjs/graphql";
import { AccountantResolverBase } from "./base/accountant.resolver.base";
import { Accountant } from "./base/Accountant";
import { AccountantService } from "./accountant.service";

@graphql.Resolver(() => Accountant)
export class AccountantResolver extends AccountantResolverBase {
  constructor(protected readonly service: AccountantService) {
    super(service);
  }
}
