import { Box } from "grommet";
import LayerHeader from "./Layer/LayerComponents/LayerHeader";
import LayerUnits from "./Layer/LayerComponents/LayerUnits";
import LayerAddress from "./Layer/LayerComponents/LayerAddress";
import "./Layer/Layer.css";
import NotesWrapper from "./Notes/NotesWrapper";
import { useEffect, useState } from "react";
import ValidationBroker from "../common/validation/impl/ValidationBroker";
import { EmailValidationScope } from "../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../common/validation/impl/scopes/NumericValidationScope";
import { PhoneNumberInput } from "../common/UI/Form/PhoneNumberInput";
import { StateSelect } from "../common/UI/Form/StateSelect";
import { ControlledInput } from "../common/UI/Form/ControlledInput";

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
            />
          </Box>
        </Box>
        <div className="controlled-input controlled-input-rows">
          <ControlledInput
            label="Name"
            placeholder="Owner Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <PhoneNumberInput
            className="phone-number-input"
            text="Phone Number"
            value={number}
            onChange={setNumber}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Phone Number can only contain numbers"
          />
          {/* <ControlledInput
            label="Entity"
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          /> */}
        </div>
        <div className="controlled-input">
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
        </div>
        <div className="controlled-input controlled-input-rows">
          <ControlledInput
            label="Street"
            placeholder="123 Main St"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <ControlledInput
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="controlled-input controlled-input-rows">
          <StateSelect
            label="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <ControlledInput
            label="Zipcode"
            placeholder="xxxxx"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="zipcode must be numbers"
          />
          <ControlledInput
            label="Units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="units must be numbers"
          />
        </div>
      </Box>
      {props.action == "put" && (
        <div style={{ maxHeight: "50vh" }}>
          <NotesWrapper propertyId={id} />
        </div>
      )}
    </Box>
  );
}
