import React from "react";
import PropertyAPI from "./core/property/Property.api";
import { Property } from "./core/property/Property";
import { Address } from "./core/address/Address";
import { useState, useEffect } from "react";
import { Main, DataTable, Text } from "grommet";
import DataTableComponent from "./components/DataTable";
const propertyAPI = new PropertyAPI();
const addressToString = (address: Address) => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip_code}`;
};
// DarkBlue : #0e1e24, Grey background: #f2f5f7
const columns = [
  {
    property: "property_id",
    header: <Text>apn</Text>,
    primary: true,
  },
  {
    property: "address",
    header: <Text>Address</Text>,
  },
  {
    property: "units",
    header: <Text>Units</Text>,
  },
  {
    property: "buildings",
    header: <Text>Buildings</Text>,
  },
  {
    property: "sqft",
    header: <Text>Sqft</Text>,
  },
  {
    property: "year_built",
    header: <Text>Year Built</Text>,
  },
];
function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      {/* <NavBar />
      <SideBar /> */}
      <DataTableComponent setData={setData} data={data} />
    </div>
  );
}

export default App;
