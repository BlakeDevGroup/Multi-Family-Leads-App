import PropertyAPI from "../../core/property/Property.api";
import React, { useState, useEffect } from "react";
import "./DataTable.css";
import MainLayer from "../Layer/Layer";
import HomeView from "../HomeView";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../../core/property/PropertySlice";
import NoteApi from "../../core/notes/Note.api";
import { setNotes } from "../../core/notes/NoteSlice";
import { WebsiteLevelHeader } from "../Headers/WebsiteLevelHeader";
import PropertyWorkflow from "../PropertiesWorkflow/PropertyWorkflow";
import Cover from "../Cover/Cover";
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  MuiEvent,
} from "@mui/x-data-grid";
import { Property } from "../../core/property/Property";
import { RootState } from "../../store";

const propertyAPI = new PropertyAPI();
const noteAPI = new NoteApi();

const columns: GridColDef[] = [
  {
    field: "street",
    headerName: "Street",
    width: 200,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "state",
    headerName: "State",
    width: 80,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "zip_code",
    headerName: "Zip Code",
    width: 100,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "units",
    headerName: "Units",
    width: 80,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
    type: "number",
    // sortComparator: (v1, v2, p1, p2) => {
    //   // console.log(v1, v2, p1, p2);
    //   if (v1 === "") {
    //     v1 = 1000000000;
    //   }
    //   if (v2 === "") {
    //     v2 = 1000000000;
    //   }
    //   return v1 - v2;
    // },
  },
  {
    field: "purchase_price",
    headerName: "Purchase Price",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
    type: "number",
  },
  {
    field: "purchase_date",
    headerName: "Purchase Year",
    width: 120,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone_number",
    headerName: "Phone Number",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
];

export default function DataTableComponent(props) {
  const [open, setOpen] = useState(false);
  const rows: Property[] = useSelector((state: RootState) => {
    return state.properties?.properties;
  });
  const dispatch = useDispatch();
  const [coverIsOpen, setCoverIsOpen] = useState(false);
  const [coverComponent, setCoverComponent] = useState<React.ReactNode>();
  const [component, setComponent] = useState(
    <HomeView
      setOpen={setOpen}
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
      <WebsiteLevelHeader
        onOpen={() => {
          setCoverIsOpen(true);
          setCoverComponent(
            <PropertyWorkflow
              onConfirm={() => {
                setCoverIsOpen(false);
              }}
            />
          );
        }}
      />
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          margin: "2vh",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            height: "90vh",
            width: "100%",
          }}
        >
          <DataGrid
            style={{ borderRadius: "10px" }}
            disableSelectionOnClick={true}
            rows={rows}
            columns={columns}
            // getCellParams={(id: any, field: string) => {}}
            onRowClick={(
              params: GridRowParams,
              event: MuiEvent<React.MouseEvent>,
              details: GridCallbackDetails
            ) => {
              setOpen(true);
              setComponent(
                <HomeView setOpen={setOpen} data={params.row} action="put" />
              );
            }}
          />
        </div>
        <MainLayer open={open} onClose={() => setOpen(false)}>
          {component}
        </MainLayer>
        <Cover
          isOpen={coverIsOpen}
          onClickOutside={() => setCoverIsOpen(false)}
        >
          {coverComponent}
        </Cover>
      </div>
    </>
  );
}
