/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SchoolFeesWhereUniqueInput } from "../../schoolFees/base/SchoolFeesWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SchoolFeesUpdateManyWithoutStudentsInput {
  @Field(() => [SchoolFeesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SchoolFeesWhereUniqueInput],
  })
  connect?: Array<SchoolFeesWhereUniqueInput>;

  @Field(() => [SchoolFeesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SchoolFeesWhereUniqueInput],
  })
  disconnect?: Array<SchoolFeesWhereUniqueInput>;

  @Field(() => [SchoolFeesWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SchoolFeesWhereUniqueInput],
  })
  set?: Array<SchoolFeesWhereUniqueInput>;
}

export { SchoolFeesUpdateManyWithoutStudentsInput as SchoolFeesUpdateManyWithoutStudentsInput };
