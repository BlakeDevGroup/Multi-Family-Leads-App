import { Text, Box, DataTable, Anchor, Header } from "grommet";
import PropertyAPI from "../../core/property/Property.api";
import NoteApi from "../../core/notes/Note.api";
import OwnerAPI from "../../core/owner/Owner.api";
import { Globe } from "grommet-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../../common/validation/impl/scopes/NumericValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { setNotes } from "../../core/notes/NoteSlice";
import { setProperties } from "../../core/property/PropertySlice";
import "./Owner.css"
import { Button } from "@mui/material";
import HomeView from "../HomeView";
import { Brand } from "../Brand/Brand";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
const propertyAPI = new PropertyAPI();
const noteAPI = new NoteApi();
const ownerAPI = new OwnerAPI();




const columns = [
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
];

const testData = [
  {
    street: "1960 De La Palma Ave",
    city: "Bartow",
    state: "FL",
    zip_code: "33830",
    units: "1",
  },
  {
    street: "300 73rd Ave N",
    city: "St Petersburg",
    state: "FL",
    zip_code: "33706",
    units: "300",
  },
  {
    street: "6214 E Lake Sammamish PKWY NE",
    city: "Redmond",
    state: "WA",
    zip_code: "98052",
    units: "50",
  },
];
export default function OwnerPage({ setOpen, action = "put", data }) {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const close = (e) => {
      if(e.keyCode === 27){
        setOpen(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[])

  useEffect(() => {
    setName(data?.name);
    setEntity(data?.entity);
    setEmail(data?.email);
    setNumber(data?.number);
  }, [data]);

  return (
    <>
      <div
        className="owner-page-wrapper"
      >
          <div
          className="header-wrapper">
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
        
        <div className="inputs-layout" >
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
        <div className="inputs-layout" style={{marginTop: "15px"}}>
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
            <DataTable
              border={{ side: "bottom", color: "#EEF1F7", size: "small" }}
              paginate={{ size: "medium" }}
              columns={columns}
              data={testData}
              // onClickRow={({ datum }) => {
              //   setOpenLayer(true);
              //   setComponent(
              //     <HomeView setOpen={setOpen} data={datum} action="put" />
              //   );
              // }}
            ></DataTable>
          </Box>
        </Box>
      )}
    </>
  );
}
