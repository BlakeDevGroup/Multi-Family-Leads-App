import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import { NumericValidationScope } from "../../common/validation/impl/scopes/NumericValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import { Owner } from "../../core/owner/Owner";
import "../Notes/NotesComponent.css";
import SectionTitle from "../Typography/SectionTitle";

type ConfirmationComponentProps = {
  onConfirm: Function;
  onBack: Function;
  newOwnerName: string;
  entity: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  purchasePrice: string;
  purchaseDate: Date | undefined;
  units: string;
  currentOwner: Owner | undefined;
};

export default function ConfirmationComponent({
  onConfirm,
  onBack,
  newOwnerName,
  entity,
  email,
  phone,
  street,
  city,
  state,
  zipcode,
  purchaseDate,
  purchasePrice,
  units,
  currentOwner,
}: ConfirmationComponentProps) {
  useEffect(() => {
    console.log(currentOwner);
  }, [currentOwner]);
  return (
    <div>
      <SectionTitle label={"Owner Details"} />
      <div className="input-styles">
        <ControlledInput
          disabled
          label="Name"
          placeholder="Owner Name..."
          value={newOwnerName ? newOwnerName : currentOwner?.name}
        ></ControlledInput>
        <ControlledInput
          disabled
          label="Entity"
          value={newOwnerName ? entity : currentOwner?.entity}
        ></ControlledInput>
      </div>
      <div className="input-styles">
        <ControlledInput
          disabled
          label="Email"
          placeholder="xxxxx"
          value={newOwnerName ? email : currentOwner?.email}
          validationFn={(value) =>
            ValidationBroker.validate(new EmailValidationScope(value))
          }
          validationText="Please enter a valid email address"
        ></ControlledInput>
        <PhoneNumberInput
          text="Phone Number"
          disabled
          value={newOwnerName ? phone : currentOwner?.phone_number}
        ></PhoneNumberInput>
      </div>
      <SectionTitle label={"Property Address"} />
      <div className="property-component-2-row">
        <ControlledInput
          disabled
          label="Street"
          placeholder="123 Main St"
          value={street}
        ></ControlledInput>
        <ControlledInput disabled label="City" value={city}></ControlledInput>
      </div>
      <div className="property-component-2-row">
        <ControlledInput disabled label="State" value={state}></ControlledInput>
        <ControlledInput
          disabled
          label="Zipcode"
          placeholder="xxxxx"
          value={zipcode}
          l
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
            value={units}
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
            value={purchasePrice}
            validationFn={(value) =>
              ValidationBroker.validate(new NumericValidationScope(value))
            }
            validationText="Enter numeric value"
          ></ControlledInput>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disabled
              label="Purchase date"
              value={purchaseDate}
              onChange={() => {}}
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
