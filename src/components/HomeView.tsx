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
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import CloseIcon from "@mui/icons-material/Close";
import { Brand } from "./Brand/Brand";
import { Button, TextField, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import SectionTitle from "./Typography/SectionTitle";
import useUser from "./Routes/useUser";
import {
  updateProperty,
  addProperty,
  deleteProperty,
} from "../core/property/PropertySlice";
import ConfirmationModal from "./Notes/ConfirmationModal";

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
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const user = useUser();

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.setOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  function handleClick() {
    props.setOpen(false);
  }

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
    <div className="home-view-container" style={{ position: "relative" }}>
      <div>
        <div className="header-wrapper">
          <Brand sizing="notes-styles" wrapper="logo-wrapper" />
          <div className="close-button-wrapper">
            <IconButton onClick={handleClick} size="large">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <SectionTitle label={"Owner Information"} />
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
          <SectionTitle label={"Property Information"} />
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
              label="Purchase date"
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
        <div className="submit-delete-wrapper">
          <div className="button">
            <Button
              onClick={(e) => {
                if (props.action == "create") {
                  dispatch(
                    addProperty({
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
                      purchase_price: purchasePrice,
                      purchase_date: purchaseDate,
                    })
                  );
                } else if (props.action == "put") {
                  dispatch(
                    updateProperty({
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
                      purchase_price: purchasePrice,
                      purchase_date: purchaseDate,
                    })
                  );
                }
                props.setOpen(false);
              }}
              variant="contained"
            >
              Submit
            </Button>
          </div>
          <div className="button">
            <Button
              onClick={() => {
                setShowModal(true);
              }}
              disabled={props.action == "create" ? true : false}
              variant="contained"
              color="error"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      {props.action == "put" && (
        <div style={{ maxHeight: "50vh" }}>
          <NotesWrapper propertyId={id} />
        </div>
      )}
      <ConfirmationModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        mainTitle={"Delete Property?"}
        subTitle={"Are you sure you want to delete this property?"}
        onConfirm={() => {
          dispatch(deleteProperty(id));
          props.setOpen(false);
        }}
      />
    </div>
  );
}
