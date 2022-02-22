import { Text, Box, DataTable } from "grommet";
import PropertyAPI from "../../core/property/Property.api";
import NoteApi from "../../core/notes/Note.api";
import OwnerAPI from "../../core/owner/Owner.api";
import { useEffect, useState } from "react";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import "./Owner.css";
import { Button } from "@mui/material";
import { Brand } from "../Brand/Brand";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import { Owner } from "../../core/owner/Owner";
import { Property } from "../../core/property/Property";
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  GridValueGetterParams,
  MuiEvent,
  GridCellParams,
} from "@mui/x-data-grid";
import { useAppDispatch } from "../../store";
const propertyAPI = new PropertyAPI();
const noteAPI = new NoteApi();
const ownerAPI = new OwnerAPI();

const columns: GridColDef[] = [
  {
    field: "street",
    headerName: "Street",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "state",
    headerName: "State",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "zip_code",
    headerName: "Zip Code",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "units",
    headerName: "Units",
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "left",
    align: "left",
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
    width: 150,
    sortable: true,
    hideable: false,
    headerAlign: "center",
    align: "center",
  },
];

type OwnerPageProps = {
  setOpen: Function;
  action?: string;
  data: Owner;
};

export default function OwnerPage({
  setOpen,
  action = "put",
  data,
}: OwnerPageProps) {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [ownerProperties, setOwnerProperties] = useState<Property[]>();

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    setName(data?.name);
    setEmail(data?.email);
    setNumber(data?.phone_number);
  }, [data]);

  useEffect(() => {
    console.log(data);
    if (data?.id) {
      ownerAPI.getProperties(data.id).then((data) => {
        setOwnerProperties(data);
      });
    }
  }, [data]);

  return (
    <>
      <div className="owner-page-wrapper">
        <div className="header-wrapper">
          <div className="header-layout">
            <Brand sizing="owner-styles" />
            <div className="submit-layout">
              <Button
                className="sumbit-layouts"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  setOpen(false);
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="inputs-layout">
          <ControlledInput
            label="Name"
            placeholder="Owner Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ControlledInput
            label="Entity"
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          />
        </div>
        <div className="inputs-layout" style={{ marginTop: "15px" }}>
          <ControlledInput
            label="Email"
            placeholder="xxxxx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new EmailValidationScope(value))
            }
            validationText="Please enter a valid email address"
          />
          <PhoneNumberInput
            text="Phone Number"
            value={number}
            onChange={setNumber}
          />
        </div>
      </div>
      {action == "put" && (
        <Box
          overflow="hidden"
          fill="vertical"
          background="#f1f5f8"
          style={{ boxShadow: "0px 1px 2px rgb(0 0 0 / 20%) inset" }}
        >
          <Box
            direction="column"
            pad={{ right: "10px" }}
            justify="start"
            background="white"
            margin="10px"
            style={{ boxShadow: "rgb(0 0 0 / 20%) 1px 1px 5px" }}
          >
            <div
              style={{
                height: "90vh",
                width: "100%",
              }}
            >
              <DataGrid
                disableSelectionOnClick={true}
                rows={ownerProperties || []}
                columns={columns}
                // getCellParams={(id: any, field: string) => {}}
                // onRowClick={(
                //   params: GridRowParams,
                //   event: MuiEvent<React.MouseEvent>,
                //   details: GridCallbackDetails
                // ) => {}
              />
            </div>
            {/* <DataTable
              border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
              paginate={{ size: "medium" }}
              columns={columns}
              data={ownerProperties}
            ></DataTable> */}
          </Box>
        </Box>
      )}
    </>
  );
}
