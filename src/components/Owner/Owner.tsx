import { Text, DataTable } from "grommet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OwnerAPI from "../../core/owner/Owner.api";
import { setOwners } from "../../core/owner/OwnerSlice";
import Cover from "../Cover/Cover";
import { Owner } from "../../core/owner/Owner";
import "./Owner.css";
import OwnerPage from "./OwnerPage";
import { WebsiteLevelHeader } from "../Headers/WebsiteLevelHeader";
import PropertyWorkflow from "../PropertiesWorkflow/PropertyWorkflow";
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
  MuiEvent,
  GridCellParams,
} from "@mui/x-data-grid";
import { RootState } from "../../store";
import { Property } from "../../core/property/Property";

const ownerAPI = new OwnerAPI();
const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    sortable: true,
    hideable: false,
    width: 200,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "entity",
    headerName: "Entity",
    sortable: true,
    hideable: false,
    width: 200,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone_number",
    headerName: "Phone Number",
    sortable: true,
    hideable: false,
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "Email",
    sortable: true,
    hideable: false,
    width: 200,
    headerAlign: "left",
    align: "left",
  },
];
// const columns = [
//   {
//     field: "name",
//     header: <Text color="#99A3C0">Name</Text>,
//     search: true,
//   },
//   {
//     property: "entity",
//     header: <Text color="#99A3C0">Entity</Text>,
//     search: true,
//   },
//   {
//     property: "phone_number",
//     header: <Text color="#99A3C0">Phone Number</Text>,
//     search: true,
//   },
//   {
//     property: "email",
//     header: <Text color="#99A3C0">Email</Text>,
//     search: true,
//   },
// ];

export default function OwnerView(props) {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState({});
  const rows: Owner[] = useSelector((state: RootState) => {
    return state.owners?.owners;
  });
  const propertyRows: Property[] = useSelector((state: RootState) => {
    return state.properties?.properties;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    ownerAPI.getAll().then((data) => {
      dispatch(setOwners(data));
    });

    ownerAPI.getProperties("922").then((data) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <WebsiteLevelHeader
        view="owner"
        onOpen={() => {
          setOpen(true);
          setComponent(<PropertyWorkflow />);
        }}
      />
      <div className="owner-content">
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
            onRowClick={(params) => {
              setOpen(true);
              setComponent(
                <OwnerPage
                  setOpen={setOpen}
                  data={params.row as Owner}
                  action="put"
                />
              );
            }}
          />
        </div>
        {/* <DataTable
          border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
          paginate={{ size: "medium" }}
          columns={columns}
          data={data}
          onClickRow={({ datum }) => {
            setOpen(true);
            setComponent(
              <OwnerPage setOpen={setOpen} data={datum} action="put" />
            );
          }}
        /> */}
        <Cover isOpen={open} onClickOutside={() => setOpen(false)}>
          {component}
        </Cover>
      </div>
    </>
  );
}
