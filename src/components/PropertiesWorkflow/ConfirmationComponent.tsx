import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Divider, Typography, Button, TextField } from "@mui/material";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../../common/validation/impl/scopes/NumericValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import "../Notes/NotesComponent.css";
import SectionTitle from "../Typography/SectionTitle";

type ConfirmationComponentProps = {
  onConfirm: Function;
  onBack: Function;
};

export default function ConfirmationComponent({
  onConfirm,
  onBack,
}: ConfirmationComponentProps) {
  return (
    <div>
      <SectionTitle label={"Owner Details"} />
      <div className="input-styles">
        <ControlledInput
          disabled
          label="Name"
          placeholder="Owner Name..."
          //   value={name}
          //   onChange={(e) => setName(e.target.value)}
        ></ControlledInput>
        <ControlledInput
          disabled
          label="Entity"
          //   value={entity}
          //   onChange={(e) => setEntity(e.target.value)}
        ></ControlledInput>
      </div>
      <div className="input-styles">
        <ControlledInput
          disabled
          label="Email"
          placeholder="xxxxx"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          validationFn={(value) =>
            ValidationBroker.validate(new EmailValidationScope(value))
          }
          validationText="Please enter a valid email address"
        ></ControlledInput>
        <PhoneNumberInput
          text="Phone Number"
          disabled
          //   value={number}
          //   onChange={setNumber}
        ></PhoneNumberInput>
      </div>
      <SectionTitle label={"Property Address"} />
      <div className="property-component-2-row">
        <ControlledInput
          disabled
          label="Street"
          placeholder="123 Main St"
          // value={street}
          // onChange={(e) => setStreet(e.target.value)}
        ></ControlledInput>
        <ControlledInput
          disabled
          label="City"
          // value={city}
          // onChange={(e) => setCity(e.target.value)}
        ></ControlledInput>
      </div>
      <div className="property-component-2-row">
        <ControlledInput
          disabled
          label="State"
          // value={state}
          // onChange={(e) => setState(e.target.value)}
        ></ControlledInput>
        <ControlledInput
          disabled
          label="Zipcode"
          placeholder="xxxxx"
          // value={zipCode}
          // onChange={(e) => setZipCode(e.target.value)}
          validationFn={(value) =>
            ValidationBroker.validate(new NumericValidationScope(value))
          }
          validationText="Enter numeric value"
        ></ControlledInput>
      </div>
      <SectionTitle label={"Property Details"} />
      <div>
        <div>
          <ControlledInput
            disabled
            label="Units"
            // value={units}
            // onChange={(e) => setUnits(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Enter numeric value"
          ></ControlledInput>
        </div>
        <div className="property-component-2-row">
          <ControlledInput
            disabled
            label="Purchase price"
            type="numeric"
            placeholder="xxxxx"
            // value={purchasePrice}
            // onChange={(e) => setPurchasePrice(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Enter numeric value"
          ></ControlledInput>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              readOnly
              label="Purchase date"
              value={""}
              onChange={() => {}}
              //   value={purchaseDate}
              //   onChange={(newValue) => {
              //     if (typeof newValue == "string") {
              //       setPurchaseDate(newValue);
              //     } else {
              //       setPurchaseDate("");
              //     }
              //   }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="workflow-button">
          <div className="workflow-button-container">
            <Button
              disableRipple
              variant="text"
              onClick={() => {
                onBack();
              }}
            >
              Back
            </Button>
            <Button
              disableRipple
              variant="contained"
              onClick={() => {
                onConfirm();
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
