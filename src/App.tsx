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
import LeftLayer from "./components/LeftLayer/LeftLayer";
// import "./app.scss";

function App() {
  const [data, setData] = useState([]);
  const [sidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = React.useState(false);

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <Main background="#f1f5f8">
      <NavBar setShowSidebar={setShowSidebar} onOpen={onOpen} />
      <LeftLayer open={open} onClose={onClose} />
      <Box direction="row-responsive">
        <FixedSideBarComponent />
        <DataTableComponent setData={setData} data={data} />
      </Box>
    </Main>
  );
}

export default App;
