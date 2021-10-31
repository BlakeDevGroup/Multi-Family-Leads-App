import React from "react";
import PropertyAPI from "./core/property/Property.api";
import { Property } from "./core/property/Property";
import { Address } from "./core/address/Address";
import { useState, useEffect } from "react";
import { Main, Box } from "grommet";
import DataTableComponent from "./components/DataTable/DataTable";
import ResponsiveNavBar from "./components/NavBar/NavBar";

function App() {
  const [data, setData] = useState([]);

  return (
    <Main background="#f1f5f8">
      <ResponsiveNavBar />
      <Box
        // border={true}
        margin="large"
        elevation="large"
        round={true}
        background="#ffffff"
      >
        <DataTableComponent setData={setData} data={data} />
      </Box>
    </Main>
  );
}

export default App;
