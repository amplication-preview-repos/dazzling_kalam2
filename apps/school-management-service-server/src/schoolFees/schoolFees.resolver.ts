import * as graphql from "@nestjs/graphql";
import { SchoolFeesResolverBase } from "./base/schoolFees.resolver.base";
import { SchoolFees } from "./base/SchoolFees";
import { SchoolFeesService } from "./schoolFees.service";

@graphql.Resolver(() => SchoolFees)
export class SchoolFeesResolver extends SchoolFeesResolverBase {
  constructor(protected readonly service: SchoolFeesService) {
    super(service);
  }
}
