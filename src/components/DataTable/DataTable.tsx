import React from "react";
import PropertyAPI from "../../core/property/Property.api";
import { Property } from "../../core/property/Property";
import { Address } from "../../core/address/Address";
import { useState, useEffect } from "react";
import { DataTable, Text, Box } from "grommet";
import "./DataTable.css";
import MainLayer from "../Layer/Layer";
import HomeView from "../Layer/LayerComponents/HomeView";
const propertyAPI = new PropertyAPI();

const columns = [
  {
    property: "address.street",
    header: <Text color="#99A3C0">Street</Text>,
    primary: true,
    search: true,
  },
  {
    property: "address.city",
    header: <Text color="#99A3C0">City</Text>,
    search: true,
  },
  {
    property: "address.state",
    header: <Text color="#99A3C0">State</Text>,
    search: true,
  },
  {
    property: "address.zip_code",
    header: <Text color="#99A3C0">Zip Code</Text>,
    search: true,
  },
  {
    property: "units",
    header: <Text color="#99A3C0">Units</Text>,
    search: true,
  },
  {
    property: "",
    header: <Text color="#99A3C0">Ownership Entity</Text>,
    search: true,
  },
  {
    property: "owner_name",
    header: <Text color="#99A3C0">Contact Person</Text>,
    search: true,

    // pin: true,
  },
  {
    property: "",
    header: <Text color="#99A3C0">Contact Phone</Text>,
    search: true,

    // pin: true,
  },
  {
    property: "",
    header: <Text color="#99A3C0">Contact Email</Text>,
    search: true,

    // pin: true,
  },
];

export default function DataTableComponent(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [component, setComponent] = useState(<HomeView data={{}} />);

  useEffect(() => {
<<<<<<< HEAD
    propertyAPI
      .create({
        id: "110 Tucker St",
        address: {
          street: "110 Tucker St",
          city: "Arvin",
          state: "CA",
          zip_code: "93203",
          county: "",
        },
        owner_id: "",
        owner_name: "Villanueva Leonardo / Villanueva Lud...",
        owner_email: "",
        owner_number: "",
        price: 1,
        units: 5,
        sqft: 0,
        buildings: 0,
        year_built: 0,
        notes: [],
      })
      .then(() => {
        propertyAPI.getAll().then((data) => props.setData(data));
      });
=======
    propertyAPI.getAll().then((res) => setData(res));
>>>>>>> a1a0ba064bd95394726a9ad1b88d2c73a7742d40
  }, []);

  return (
    <Box background="white" margin="2vh">
      <DataTable
        border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
        paginate={{ size: "medium" }}
        columns={columns}
        data={data}
        onClickRow={({ datum }) => {
          setOpen(true);
          setComponent(<HomeView data={datum} />);
        }}
      />
      <MainLayer open={open} onClose={() => setOpen(false)}>
        {component}
      </MainLayer>
    </Box>
  );
}
