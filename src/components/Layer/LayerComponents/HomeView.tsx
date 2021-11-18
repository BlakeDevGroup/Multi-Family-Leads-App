import { Box } from "grommet";
import LayerContacts from "./LayerContacts";
import LayerHeader from "./LayerHeader";
import LayerUnits from "./LayerUnits";
import LayerAddress from "./LayerAddress";
import "../Layer.css";
import NotesWrapper from "../../Notes/NotesWrapper";
import { Note } from "grommet-icons";
import React from "react";

// type NoteItem = {
//   note: string;
//   dateCreated: string;
//   timeCreated: string;
// };
export default function HomeView(props) {
  console.log(new Date().toString());
  return (
    <Box width="large" overflow="hidden" fill="vertical" direction="column">
      <Box style={{ maxHeight: "50vh", minHeight: "unset" }}>
        <Box
          direction="row-responsive"
          margin={{ top: "small", right: "large", bottom: "small" }}
        >
          <Box fill>
            <LayerHeader />
          </Box>
        </Box>

        <Box direction="row-responsive" margin="small">
          <LayerContacts
            fill={"horizontal"}
            text="Contact Person"
            placeholder="First Last"
            value={props.data ? props.data.owner_name : ""}
          />
          <LayerContacts
            fill={"horizontal"}
            text="Contact Number"
            placeholder="xxx-xxx-xxxx"
            value={props.data ? props.data.owner_number : ""}
          />
        </Box>
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            fill={"horizontal"}
            text="Ownership Entity"
            placeholder="Company"
            value={props.data ? props.data.owner_entity : ""}
          />
          <LayerContacts
            fill={"horizontal"}
            text="Contact Email"
            placeholder="Email@email.com"
            value={props.data ? props.data.owner_email : ""}
          />
        </Box>
        <LayerUnits value={props.data ? props.data.units : ""} />
        <Box direction="row-responsive">
          <Box
            direction="column"
            margin={{
              top: "small",
              bottom: "small",
              left: "small",
              right: "xxsmall",
            }}
            fill="horizontal"
          >
            <LayerAddress
              text="Street"
              placeholder="123 Main St"
              value={props.data ? props.data.address.street : ""}
            />
            <LayerAddress
              text="City"
              value={props.data ? props.data.address.city : ""}
            />
          </Box>
          <Box
            basis="small"
            direction="column"
            margin={{
              top: "small",
              bottom: "small",
              left: "xxsmall",
              right: "small",
            }}
            fill="horizontal"
          >
            <LayerAddress
              text="State"
              value={props.data ? props.data.address.state : ""}
            />
            <LayerAddress
              text="Zip Code"
              placeholder="xxxxx"
              value={props.data ? props.data.address.zip_code : ""}
            />
          </Box>
        </Box>
      </Box>
      <Box style={{ maxHeight: "50vh" }}>
        <NotesWrapper />
      </Box>
    </Box>
  );
}
