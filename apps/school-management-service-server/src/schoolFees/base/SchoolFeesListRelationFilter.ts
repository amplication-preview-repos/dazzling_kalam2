/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SchoolFeesWhereInput } from "./SchoolFeesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SchoolFeesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SchoolFeesWhereInput,
  })
  @ValidateNested()
  @Type(() => SchoolFeesWhereInput)
  @IsOptional()
  @Field(() => SchoolFeesWhereInput, {
    nullable: true,
  })
  every?: SchoolFeesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SchoolFeesWhereInput,
  })
  @ValidateNested()
  @Type(() => SchoolFeesWhereInput)
  @IsOptional()
  @Field(() => SchoolFeesWhereInput, {
    nullable: true,
  })
  some?: SchoolFeesWhereInput;

  @ApiProperty({
    required: false,
    type: () => SchoolFeesWhereInput,
  })
  @ValidateNested()
  @Type(() => SchoolFeesWhereInput)
  @IsOptional()
  @Field(() => SchoolFeesWhereInput, {
    nullable: true,
  })
  none?: SchoolFeesWhereInput;
}
export { SchoolFeesListRelationFilter as SchoolFeesListRelationFilter };
