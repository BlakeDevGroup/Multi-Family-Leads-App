import React from "react";
import PropertyAPI from "./core/property/Property.api";
import { Property } from "./core/property/Property";
import { Address } from "./core/address/Address";
import { useState, useEffect } from "react";
import { Main, DataTable, Text } from "grommet";
import DataTableComponent from "./components/DataTable/DataTable";
import ResponsiveNavBar from "./components/NavBar/NavBar";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <ResponsiveNavBar />
      <DataTableComponent setData={setData} data={data} />
    </div>
  );
}

export default App;
