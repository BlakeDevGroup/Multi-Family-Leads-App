import { Box } from "grommet";
import LayerContacts from "./LayerContacts";
import LayerHeader from "./LayerHeader";
import LayerUnits from "./LayerUnits";
import LayerAddress from "./LayerAddress";
import "../Layer.css";
import NotesWrapper from "../../Notes/NotesWrapper";
import { useEffect, useState } from "react";

export default function HomeView(props) {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [units, setUnits] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [Notes, setNotes] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setName(props.data?.owner_name);
    setEntity(props.data?.owner_entity);
    setEmail(props.data?.owner_email);
    setNumber(props.data?.owner_number);
    setStreet(props.data?.address?.street);
    setCity(props.data?.address?.city);
    setZipCode(props.data?.address?.zip_code);
    setNotes(props.data?.notes);
    setId(props.data?.id);
  }, [props.data]);
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
        <LayerContacts value={id} />
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="Name"
            placeholder="Owner Name..."
            value={name}
            onChange={setName}
          />
          <LayerContacts text="Entity" value={entity} onChange={setEntity} />
        </Box>
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="Email"
            placeholder="xxxxx"
            value={email}
            onChange={setEmail}
          />
          <LayerContacts
            text="Phone Number"
            value={number}
            onChange={setNumber}
          />
        </Box>
        <LayerUnits value={units} onChange={setUnits} />
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
              value={street}
              onChange={setStreet}
            />
            <LayerAddress text="City" value={city} onChange={setCity} />
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
            <LayerAddress text="State" value={state} onChange={setState} />
            <LayerAddress
              text="Zip Code"
              placeholder="xxxxx"
              value={zipCode}
              onChange={setZipCode}
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
