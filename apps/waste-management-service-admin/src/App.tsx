import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WasteCollectionZoneList } from "./wasteCollectionZone/WasteCollectionZoneList";
import { WasteCollectionZoneCreate } from "./wasteCollectionZone/WasteCollectionZoneCreate";
import { WasteCollectionZoneEdit } from "./wasteCollectionZone/WasteCollectionZoneEdit";
import { WasteCollectionZoneShow } from "./wasteCollectionZone/WasteCollectionZoneShow";
import { WasteCollectionRequestList } from "./wasteCollectionRequest/WasteCollectionRequestList";
import { WasteCollectionRequestCreate } from "./wasteCollectionRequest/WasteCollectionRequestCreate";
import { WasteCollectionRequestEdit } from "./wasteCollectionRequest/WasteCollectionRequestEdit";
import { WasteCollectionRequestShow } from "./wasteCollectionRequest/WasteCollectionRequestShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WasteManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WasteCollectionZone"
          list={WasteCollectionZoneList}
          edit={WasteCollectionZoneEdit}
          create={WasteCollectionZoneCreate}
          show={WasteCollectionZoneShow}
        />
        <Resource
          name="WasteCollectionRequest"
          list={WasteCollectionRequestList}
          edit={WasteCollectionRequestEdit}
          create={WasteCollectionRequestCreate}
          show={WasteCollectionRequestShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
