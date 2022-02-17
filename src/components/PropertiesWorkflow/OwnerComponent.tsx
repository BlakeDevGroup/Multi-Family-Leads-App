import {
  MenuItem,
  Select,
  FormControl,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlledInput } from "../../common/UI/Form/ControlledInput";
import { PhoneNumberInput } from "../../common/UI/Form/PhoneNumberInput";
import OwnerAPI from "../../core/owner/Owner.api";
import ValidationBroker from "../../common/validation/impl/ValidationBroker";
import { setOwners } from "../../core/owner/OwnerSlice";
import { EmailValidationScope } from "../../common/validation/impl/scopes/EmailValidationScope";
import { SelectChangeEvent } from "@mui/material/Select";
import { Owner } from "../../core/owner/Owner";

const ownerAPI = new OwnerAPI();
type OwnerComponentProps = {
  onNext: Function;
  setNewOwnerName: Function;
  newOwnerName: string;
  setEntity: Function;
  entity: string;
  setEmail: Function;
  email: string;
  setPhone: Function;
  phone: string;
  setOwnerId: Function;
  ownerId: string;
};

export default function OwnerComponent({
  onNext,
  setNewOwnerName,
  newOwnerName,
  setEntity,
  entity,
  setEmail,
  email,
  setPhone,
  phone,
  setOwnerId,
  ownerId,
}: OwnerComponentProps) {
  const [fieldDisabled, setFieldDisabled] = useState(false);
  const [dropdownDisabled, setDropdownDisabled] = useState(false);
  const [owner, setOwner] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // const [newOwnerName, setNewOwnerName] = useState("");

  useEffect(() => {
    if (!newOwnerName) {
      setButtonDisabled(true);
      setDropdownDisabled(false);
    } else {
      setButtonDisabled(false);
      setDropdownDisabled(true);
    }
  }, [newOwnerName]);

  const owners: Owner[] = useSelector((state: any) => {
    return state.owners?.owners;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    ownerAPI.getAll().then((data) => {
      dispatch(setOwners(data));
    });
  }, []);

  return (
    <FormControl sx={{ m: 6, minWidth: 350 }}>
      <Typography style={{ margin: "0 0 10px 0" }}>Select an owner:</Typography>
      <Select
        disabled={dropdownDisabled}
        onChange={({ target: { value } }: SelectChangeEvent) => {
          setOwner(value);

          setOwnerId(
            owners.filter((owner) => {
              return owner.name == value;
            })[0]?.id
          );

          if (value == "") {
            setFieldDisabled(false), setButtonDisabled(true);
          } else {
            setFieldDisabled(true), setButtonDisabled(false);
          }
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {owners.map((owner) => (
          <MenuItem key={owner.id} value={owner.name}>
            {owner.name}
          </MenuItem>
        ))}
      </Select>
      <div className="divider-container">
        <Divider>
          <Chip label="or" />
        </Divider>
      </div>
      <div className="create-owner-wrapper">
        <Typography>Create an owner:</Typography>
        <div className="input-styles">
          <ControlledInput
            required="required"
            label="Name"
            placeholder="Owner Name..."
            disabled={fieldDisabled}
            value={newOwnerName}
            onChange={(e) => {
              setNewOwnerName(e.target.value);
            }}
          ></ControlledInput>
          <ControlledInput
            label="Entity"
            disabled={fieldDisabled}
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
          ></ControlledInput>
        </div>
        <div className="input-styles">
          <ControlledInput
            disabled={fieldDisabled}
            label="Email"
            placeholder="xxxxx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validationFn={(value) =>
              ValidationBroker.validate(new EmailValidationScope(value))
            }
            validationText="Please enter a valid email address"
          ></ControlledInput>
          <PhoneNumberInput
            disabled={fieldDisabled}
            text="Phone Number"
            value={phone}
            onChange={setPhone}
          ></PhoneNumberInput>
        </div>
        <div className="workflow-required">
          <Typography variant="caption">*Required</Typography>
        </div>
        <div className="workflow-button">
          <div className="workflow-button-container">
            <Button
              disableRipple
              disabled={buttonDisabled}
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
    </FormControl>
  );
}
