/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WasteCollectionZoneService } from "../wasteCollectionZone.service";
import { WasteCollectionZoneCreateInput } from "./WasteCollectionZoneCreateInput";
import { WasteCollectionZone } from "./WasteCollectionZone";
import { WasteCollectionZoneFindManyArgs } from "./WasteCollectionZoneFindManyArgs";
import { WasteCollectionZoneWhereUniqueInput } from "./WasteCollectionZoneWhereUniqueInput";
import { WasteCollectionZoneUpdateInput } from "./WasteCollectionZoneUpdateInput";

export class WasteCollectionZoneControllerBase {
  constructor(protected readonly service: WasteCollectionZoneService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WasteCollectionZone })
  async createWasteCollectionZone(
    @common.Body() data: WasteCollectionZoneCreateInput
  ): Promise<WasteCollectionZone> {
    return await this.service.createWasteCollectionZone({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WasteCollectionZone] })
  @ApiNestedQuery(WasteCollectionZoneFindManyArgs)
  async wasteCollectionZones(
    @common.Req() request: Request
  ): Promise<WasteCollectionZone[]> {
    const args = plainToClass(WasteCollectionZoneFindManyArgs, request.query);
    return this.service.wasteCollectionZones({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WasteCollectionZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async wasteCollectionZone(
    @common.Param() params: WasteCollectionZoneWhereUniqueInput
  ): Promise<WasteCollectionZone | null> {
    const result = await this.service.wasteCollectionZone({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WasteCollectionZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWasteCollectionZone(
    @common.Param() params: WasteCollectionZoneWhereUniqueInput,
    @common.Body() data: WasteCollectionZoneUpdateInput
  ): Promise<WasteCollectionZone | null> {
    try {
      return await this.service.updateWasteCollectionZone({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WasteCollectionZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWasteCollectionZone(
    @common.Param() params: WasteCollectionZoneWhereUniqueInput
  ): Promise<WasteCollectionZone | null> {
    try {
      return await this.service.deleteWasteCollectionZone({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
