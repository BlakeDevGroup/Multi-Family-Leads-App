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
import WorkflowConfirmation from "../../assets/WorkflowConfirmation.svg";
import OwnerWoman from "../../assets/OwnerWoman.svg";
import ProfileInfo from "../../assets/ProfileInfo.svg";

const ownerAPI = new OwnerAPI();
type OwnerComponentProps = {
  onNext: Function;
};

export default function OwnerComponent({ onNext }: OwnerComponentProps) {
  const [fieldDisabled, setFieldDisabled] = useState(false);
  const [owner, setOwner] = useState("");

  const owners = useSelector((state: any) => {
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
        onChange={(event: SelectChangeEvent) => {
          setOwner(event.target.value as string);
          console.log(event.target.value);
          event.target.value == ""
            ? setFieldDisabled(false)
            : setFieldDisabled(true);
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
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
          ></ControlledInput>
          <ControlledInput
            label="Entity"
            disabled={fieldDisabled}
            //   value={entity}
            //   onChange={(e) => setEntity(e.target.value)}
          ></ControlledInput>
        </div>
        <div className="input-styles">
          <ControlledInput
            disabled={fieldDisabled}
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
            disabled={fieldDisabled}
            text="Phone Number"
            //   value={number}
            //   onChange={setNumber}
          ></PhoneNumberInput>
        </div>
        <div className="workflow-required">
          <Typography variant="caption">*Required</Typography>
        </div>
        <div className="workflow-button">
          <div className="workflow-button-container">
            {/* <Button variant="contained" color="secondary">
                Back
              </Button> */}
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
    </FormControl>
  );
}
