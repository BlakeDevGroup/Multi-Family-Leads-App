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
import MainLayer from "./components/Layer/Layer";
import PropertyJsonQuery from "./core/property/PropertyJsonQuery";
import HomeView from "./components/Layer/LayerComponents/HomeView";
import { Routes, Route } from "react-router";
import Owner from "./components/Owner/Owner";
import "./components/SideBar/SideBar.css"

function App() {
  const [data, setData] = useState([]);
  const [sidebar, setShowSidebar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = useState(<HomeView data={{}} />);

  function onOpen() {
    setOpen(true);
  }

  function setLayer({ datum }) {
    console.log(datum);
    setOpen(true);
    setComponent(<HomeView data={datum} />);
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <Main background="#f1f5f8" >
      <NavBar setShowSidebar={setShowSidebar} onOpen={onOpen} />
      <MainLayer open={open} onClose={onClose}>
        {component}
      </MainLayer>

      <Box direction="row-responsive"  >
        <FixedSideBarComponent />
        <Routes>
          <Route path="/" element={ <DataTableComponent
          setData={setData}
          data={data}
          onClickRow={setLayer}
        /> } />
        <Route path="Owner" element={<Owner />} />
        </Routes>
      </Box>
    </Main>
  );
}

export default App;
