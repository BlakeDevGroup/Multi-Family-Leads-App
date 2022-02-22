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
import { Button, TextField, IconButton, Autocomplete } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SectionTitle from "./Typography/SectionTitle";
import useUser from "./Routes/useUser";
import { updateProperty, deleteProperty } from "../core/property/PropertySlice";
import ConfirmationModal from "./Notes/ConfirmationModal";
import { setOwners, updateOwner } from "../core/owner/OwnerSlice";
import { DocumentUpdate } from "grommet-icons";
import { Owner } from "../core/owner/Owner";
import OwnerAPI from "../core/owner/Owner.api";

export default function HomeView(props) {
  const owners: any = useSelector((state: any) => {
    return state.owners?.owners
      .filter((owner: Owner) => {
        return !!owner.name;
      })
      .map((owner: Owner) => {
        return Object.assign({}, owner, { label: owner.name });
      });
  });

  const [owner, setOwner] = useState<Owner | null>(
    owners.filter((owner) => owner.id == props.data?.owner_id)[0]
  );
  const [name, setName] = useState(
    owners.filter((owner) => owner.id == props.data?.owner_id)[0]
  );
  const [number, setNumber] = useState("");
  const [units, setUnits] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("CA");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [Notes, setNotes] = useState("");
  const [id, setId] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  // const [ownerValue, setOwnerValue] = useState<Owner | null>();
  const [purchaseDate, setPurchaseDate] = useState<Date | undefined>();
  const [showModal, setShowModal] = useState(false);

  const ownerAPI = new OwnerAPI();
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
    ownerAPI.getAll().then((data) => {
      dispatch(setOwners(data));
    });
  }, []);

  useEffect(() => {
    setOwner(owners.filter((owner) => owner.id == props.data?.owner_id)[0]);
    setName(props.data?.name);
    setStreet(props.data?.street);
    setState(props.data?.state);
    setCity(props.data?.city);
    setZipCode(props.data?.zip_code);
    setNotes(props.data?.notes);
    setUnits(props.data?.units);
    setId(props.data?.id);
    setPurchasePrice(props.data?.purchase_price);
    setPurchaseDate(props.data?.purchase_date);
    setOwnerId(props.data?.owner_id);
  }, [props.data]);

  console.log(owner);

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
          <Autocomplete
            fullWidth
            options={owners}
            id="auto-complete"
            autoComplete
            value={owner}
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Owner..."
                variant="outlined"
              />
            )}
            onChange={(event: any, value: Owner | null) => {
              setOwner(value);
              setName(value?.name);
            }}
          />
          {/* <ControlledInput
            label="Name"
            placeholder="Owner Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <PhoneNumberInput
            className="phone-number-input"
            text="Phone Number"
            value={owner?.phone_number}
            readOnly
          />
        </div>
        <div className="controlled-input">
          <ControlledInput
            label="Email"
            placeholder="xxxxx"
            value={owner?.email}
            readOnly
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
              views={["year"]}
              label="Purchase date"
              value={purchaseDate}
              onChange={(newValue) => {
                if (typeof newValue == "string") {
                  setPurchaseDate(newValue);
                } else {
                  setPurchaseDate(undefined);
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
                dispatch(
                  updateProperty({
                    name: owner?.name,
                    id: id,
                    street: street,
                    city: city,
                    state: state,
                    zip_code: zipCode,
                    units: units,
                    purchase_price: purchasePrice,
                    purchase_date: purchaseDate,
                    owner_id: owner?.id,
                  })
                );
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
