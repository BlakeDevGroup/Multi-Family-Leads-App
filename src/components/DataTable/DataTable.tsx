import React from "react";
import PropertyAPI from "../../core/property/Property.api";
import { Property } from "../../core/property/Property";
import { Address } from "../../core/address/Address";
import { useState, useEffect } from "react";
import { DataTable, Text } from "grommet";
import "./DataTable.css";
const propertyAPI = new PropertyAPI();
const addressToString = (address: Address) => {
  return `${address.street}, ${address.city}, ${address.state} ${address.zip_code}`;
};
const columns = [
  {
    property: "property_id",
    header: <Text color="#99A3C0">apn</Text>,
    primary: true,
  },
  {
    property: "address",
    header: <Text color="#99A3C0">Address</Text>,
  },
  {
    property: "units",
    header: <Text color="#99A3C0">Units</Text>,
  },
  {
    property: "buildings",
    header: <Text color="#99A3C0">Buildings</Text>,
    // pin: true,
  },
  {
    property: "sqft",
    header: <Text color="#99A3C0">Sqft</Text>,
  },
  {
    property: "year_built",
    header: <Text color="#99A3C0">Year Built</Text>,
  },
];

export default function DataTableComponent(props) {
  useEffect(() => {
    propertyAPI.getAll().then((data) =>
      props.setData(
        data.map((property) => {
          property.address = addressToString(property.address);
          return property;
        })
      )
    );
  }, []);

  return (
    <DataTable
      className="data-table"
      // padding={{ top: "small" }}
      border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
      paginate={true}
      columns={columns}
      data={props.data}
    />
  );
}
