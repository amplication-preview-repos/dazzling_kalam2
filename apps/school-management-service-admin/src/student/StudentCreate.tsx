import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { ExamTitle } from "../exam/ExamTitle";
import { ParentTitle } from "../parent/ParentTitle";
import { ReportsTitle } from "../reports/ReportsTitle";
import { SchoolFeesTitle } from "../schoolFees/SchoolFeesTitle";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Class" source="classField" />
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <ReferenceArrayInput
          source="exams"
          reference="Exam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExamTitle} />
        </ReferenceArrayInput>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reportsItems"
          reference="Reports"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schoolFeesItems"
          reference="SchoolFees"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SchoolFeesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
