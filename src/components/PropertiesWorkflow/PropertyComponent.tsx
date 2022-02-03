import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField, Typography } from "@mui/material";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { NumericValidationScope } from "../../common/validation/impl/scopes/NumericValidationScope";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import PropertyAPI from "../../core/property/Property.api";
import SectionTitle from "../Typography/SectionTitle";

const propertyAPI = new PropertyAPI();
type PropertyComponentProps = {
  onNext: Function;
  onBack: Function;
};

export default function PropertyComponent({
  onNext,
  onBack,
}: PropertyComponentProps) {
  return (
    <div>
      <div className="name-number-email">
        <SectionTitle label={"Property Address"} />
        <div className="property-component-2-row">
          <ControlledInput
            required="required"
            label="Street"
            placeholder="123 Main St"
            // value={street}
            // onChange={(e) => setStreet(e.target.value)}
          ></ControlledInput>
          <ControlledInput
            required="required"
            label="City"
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
          ></ControlledInput>
        </div>
        <div className="property-component-2-row">
          <ControlledInput
            required="required"
            label="State"
            // value={state}
            // onChange={(e) => setState(e.target.value)}
          ></ControlledInput>
          <ControlledInput
            required="required"
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
          <div className="workflow-required">
            <Typography variant="caption">*Required</Typography>
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
                  onNext();
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
