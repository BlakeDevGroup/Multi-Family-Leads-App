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
    setState(props.data?.address?.state);
    setCity(props.data?.address?.city);
    setZipCode(props.data?.address?.zip_code);
    setNotes(props.data?.notes);
    setUnits(props.data?.units);
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
            <LayerHeader
              resource={{
                id: id,
                owner_name: name,
                owner_entity: entity,
                owner_email: email,
                owner_number: number,
                address: {
                  street: street,
                  city: city,
                  state: state,
                  zip_code: zipCode,
                },
                units: units,
              }}

              // name={name}
              // entity={entity}
              // email={email}
              // number={number}
              // street={street}
              // state={state}
            />
          </Box>
        </Box>
        {/* <LayerContacts value={id} /> */}
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="Name"
            placeholder="Owner Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LayerContacts
            text="Entity"
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          />
        </Box>
        <Box direction="row-responsive" margin="small">
          <LayerContacts
            text="Email"
            placeholder="xxxxx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LayerContacts
            text="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Box>
        <LayerUnits value={units} onChange={(e) => setUnits(e.target.value)} />
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
              onChange={(e) => setStreet(e.target.value)}
            />
            <LayerAddress
              text="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <LayerAddress
              text="Zip Code"
              placeholder="xxxxx"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
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
