import React from "react";
import PropertyAPI from "../../core/property/Property.api";
import { Property } from "../../core/property/Property";
import { Address } from "../../core/address/Address";
import { useState, useEffect } from "react";
import { DataTable, Text, Box } from "grommet";
import "./DataTable.css";
const propertyAPI = new PropertyAPI();
const addressToString = (address: Address) => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip_code}`;
};
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
    property: "",
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
  useEffect(() => {
    propertyAPI.getAll().then((data) => props.setData(data));
  }, []);

  return (
    <Box
      margin="large"
      flex
      elevation="large"
      round={true}
      background="#ffffff"
    >
      <DataTable
        className="data-table"
        // padding={{ top: "small" }}
        border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
        paginate={true}
        columns={columns}
        data={props.data}
        onClickRow={props.onClickRow}
      />
    </Box>
  );
}
