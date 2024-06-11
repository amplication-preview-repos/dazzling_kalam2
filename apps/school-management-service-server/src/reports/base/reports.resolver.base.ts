/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Reports } from "./Reports";
import { ReportsCountArgs } from "./ReportsCountArgs";
import { ReportsFindManyArgs } from "./ReportsFindManyArgs";
import { ReportsFindUniqueArgs } from "./ReportsFindUniqueArgs";
import { CreateReportsArgs } from "./CreateReportsArgs";
import { UpdateReportsArgs } from "./UpdateReportsArgs";
import { DeleteReportsArgs } from "./DeleteReportsArgs";
import { Student } from "../../student/base/Student";
import { ReportsService } from "../reports.service";
@graphql.Resolver(() => Reports)
export class ReportsResolverBase {
  constructor(protected readonly service: ReportsService) {}

  async _reportsItemsMeta(
    @graphql.Args() args: ReportsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Reports])
  async reportsItems(
    @graphql.Args() args: ReportsFindManyArgs
  ): Promise<Reports[]> {
    return this.service.reportsItems(args);
  }

  @graphql.Query(() => Reports, { nullable: true })
  async reports(
    @graphql.Args() args: ReportsFindUniqueArgs
  ): Promise<Reports | null> {
    const result = await this.service.reports(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Reports)
  async createReports(
    @graphql.Args() args: CreateReportsArgs
  ): Promise<Reports> {
    return await this.service.createReports({
      ...args,
      data: {
        ...args.data,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Reports)
  async updateReports(
    @graphql.Args() args: UpdateReportsArgs
  ): Promise<Reports | null> {
    try {
      return await this.service.updateReports({
        ...args,
        data: {
          ...args.data,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Reports)
  async deleteReports(
    @graphql.Args() args: DeleteReportsArgs
  ): Promise<Reports | null> {
    try {
      return await this.service.deleteReports(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Student, {
    nullable: true,
    name: "student",
  })
  async getStudent(@graphql.Parent() parent: Reports): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
