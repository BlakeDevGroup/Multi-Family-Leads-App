import LayerHeader from "./Layer/LayerComponents/LayerHeader";
import NotesWrapper from "./Notes/NotesWrapper";
import { useEffect, useState } from "react";
import ValidationBroker from "../common/validation/impl/ValidationBroker";
import { EmailValidationScope } from "../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../common/validation/impl/scopes/NumericValidationScope";
import { PhoneNumberInput } from "../common/UI/Form/PhoneNumberInput";
import { StateSelect } from "../common/UI/Form/StateSelect";
import { ControlledInput } from "../common/UI/Form/ControlledInput";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";

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
  const [purchasePrice, setPurchasePrice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

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
    setPurchasePrice(props.data?.purchasePrice);
    setPurchaseDate(props.data?.purchaseDate);
  }, [props.data]);

  return (
    <div className="home-view-container">
      <div>
        <div className="input-title">
          <Typography>Owner Information</Typography>
        </div>
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
        <div className="input-title">
          <Typography>Property Information</Typography>
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
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Enter numeric value"
          />
          <ControlledInput
            label="Units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Enter numeric value"
          />
        </div>
        <div className="controlled-input controlled-input-rows">
          <ControlledInput
            label="Purchase price"
            type="numeric"
            placeholder="xxxxx"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Enter numeric value"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Basic example"
              value={purchaseDate}
              onChange={(newValue) => {
                if (typeof newValue == "string") {
                  setPurchaseDate(newValue);
                } else {
                  setPurchaseDate("");
                }
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      {props.action == "put" && (
        <div style={{ maxHeight: "50vh" }}>
          <NotesWrapper propertyId={id} />
        </div>
      )}
    </div>
  );
}
