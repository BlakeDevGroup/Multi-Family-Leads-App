import { Box } from "grommet";
import LayerContacts from "./LayerContacts";
import LayerHeader from "./LayerHeader";
import LayerUnits from "./LayerUnits";
import LayerAddress from "./LayerAddress";
import "../Layer.css";
import NotesWrapper from "../../Notes/NotesWrapper";
import { useEffect, useState } from "react";
import ValidationBroker from "../../../common/validation/impl/ValidationBroker";
import { EmailValidationScope } from "../../../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../../../common/validation/impl/scopes/NumericValidationScope";
import LayerNumber from "./LayerNumber";
import StateDropdown from "./StateDropdown";

export default function HomeView(props) {
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [units, setUnits] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("CA");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [Notes, setNotes] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setName(props.data?.owner_name);
    setEntity(props.data?.owner_entity);
    setEmail(props.data?.owner_email);
    setNumber(props.data?.owner_number);
    setStreet(props.data?.street);
    setState(props.data?.state);
    setCity(props.data?.city);
    setZipCode(props.data?.zip_code);
    setNotes(props.data?.notes);
    setUnits(props.data?.units);
    setId(props.data?.id);
  }, [props.data]);

  return (
    <Box width="large" overflow="hidden" fill="vertical" direction="column">
      <Box style={{ maxHeight: "50vh", minHeight: "unset" }}>
        <Box
          direction="row-responsive"
          margin={{ top: "small", right: "large" }}
        >
          <Box fill>
            <LayerHeader
              setOpen={props.setOpen}
              action={props.action}
              resource={{
                id: id,
                owner_name: name,
                owner_entity: entity,
                owner_email: email,
                owner_number: number,
                street: street,
                city: city,
                state: state,
                zip_code: zipCode,
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
        <Box direction="row-responsive">
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
        <Box direction="row-responsive">
          <LayerContacts
            text="Email"
            placeholder="xxxxx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new EmailValidationScope(value))
            }
            validationText="Please enter a valid email address"
          />
          <LayerNumber
            text="Phone Number"
            value={number}
            onChange={setNumber}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Phone Number can only contain numbers"
          />
        </Box>
        <LayerUnits
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          validationFn={(value) =>
            ValidationBroker.validate(new NumericValidationScope(value))
          }
          validationText="units must be numbers"
        />
        <Box direction="row-responsive">
          <Box
            direction="column"
            margin={{
              top: "small",
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
              left: "xxsmall",
              right: "small",
            }}
            fill="horizontal"
          >
            <StateDropdown
              text="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <LayerAddress
              text="Zip Code"
              placeholder="xxxxx"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              validationFn={(value) =>
                ValidationBroker.validate(new NumericValidationScope(value))
              }
              validationText="zipcode must be numbers"
            />
          </Box>
        </Box>
      </Box>
      {props.action == "put" && (
        <Box style={{ maxHeight: "50vh" }}>
          <NotesWrapper propertyId={id} />
        </Box>
      )}
    </Box>
  );
}
