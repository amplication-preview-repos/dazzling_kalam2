import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PARENT_TITLE_FIELD } from "./ParentTitle";

export const ParentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Student"
          target="parentId"
          label="Students"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Class" source="classField" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateOfBirth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="FirstName" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="LastName" source="lastName" />
            <ReferenceField
              label="Parent"
              source="parent.id"
              reference="Parent"
            >
              <TextField source={PARENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
