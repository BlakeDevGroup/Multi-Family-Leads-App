import React from "react";
import PropertyAPI from "../../core/property/Property.api";
import { Property } from "../../core/property/Property";
import { Address } from "../../core/address/Address";
import { useState, useEffect } from "react";
import { DataTable, Text, Box } from "grommet";
import "./DataTable.css";
import MainLayer from "../Layer/Layer";
import HomeView from "../HomeView";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../../core/property/PropertySlice";
import NoteApi from "../../core/notes/Note.api";
import { setNotes } from "../../core/notes/NoteSlice";
const propertyAPI = new PropertyAPI();
const noteAPI = new NoteApi();

const columns = [
  {
    property: "owner_name",
    header: <Text color="#99A3C0">Name</Text>,
    search: true,
  },
  {
    property: "owner_entity",
    header: <Text color="#99A3C0">Entity</Text>,
    search: true,
  },
  {
    property: "street",
    header: <Text color="#99A3C0">Street</Text>,
    search: true,
  },
  {
    property: "city",
    header: <Text color="#99A3C0">City</Text>,
    search: true,
  },
  {
    property: "state",
    header: <Text color="#99A3C0">State</Text>,
    search: true,
  },
  {
    property: "zip_code",
    header: <Text color="#99A3C0">Zip Code</Text>,
    search: true,
  },
  {
    property: "units",
    header: <Text color="#99A3C0">Units</Text>,
    search: true,
  },

  {
    property: "owner_number",
    header: <Text color="#99A3C0">Phone Number</Text>,
    search: true,
  },
  {
    property: "owner_email",
    header: <Text color="#99A3C0">Email</Text>,
    search: true,
  },
];

export default function DataTableComponent(props) {
  const [open, setOpen] = useState(false);
  const data = useSelector((state: any) => {
    console.log(state.properties?.properties);
    return state.properties?.properties;
  });
  const dispatch = useDispatch();
  const [component, setComponent] = useState(
    <HomeView
      data={{
        address: { street: "", city: "", state: "", zip_code: "" },
        owner_email: "",
        owner_entity: "",
        owner_name: "",
        owner_number: "",
        units: "",
      }}
    />
  );

  useEffect(() => {
    propertyAPI.getAll().then((data) => {
      dispatch(setProperties(data));
    });

    noteAPI.getAll().then((data) => {
      dispatch(setNotes(data));
    });
  }, []);

  return (
    <>
      <NavBar
        onOpen={() => {
          setOpen(true);
          setComponent(
            <HomeView setOpen={setOpen} data={{}} action="create" />
          );
        }}
      />
      <Box background="white" margin="2vh">
        <DataTable
          border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
          paginate={{ size: "medium" }}
          columns={columns}
          data={data}
          onClickRow={({ datum }) => {
            setOpen(true);
            setComponent(
              <HomeView setOpen={setOpen} data={datum} action="put" />
            );
          }}
        />
        <MainLayer open={open} onClose={() => setOpen(false)}>
          {component}
        </MainLayer>
      </Box>
    </>
  );
}
