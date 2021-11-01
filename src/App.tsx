import React from "react";
import PropertyAPI from "./core/property/Property.api";
import { Property } from "./core/property/Property";
import { Address } from "./core/address/Address";
import { useState, useEffect } from "react";
import { Main, Box, Text, Grid, Button } from "grommet";
import DataTableComponent from "./components/DataTable/DataTable";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/FixedSideBar";
import FixedSideBarComponent from "./components/SideBar/FixedSideBar";
// import "./app.scss";

function App() {
  const [data, setData] = useState([]);
  const [sidebar, setShowSidebar] = useState(false);

  return (
    <Main background="#f1f5f8">
      <NavBar setShowSidebar={setShowSidebar} />
      <Box direction="row-responsive">
        <FixedSideBarComponent />
        <DataTableComponent setData={setData} data={data} />
      </Box>
    </Main>
  );
}

export default App;
