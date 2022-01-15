import { FormControl, TextField } from "@mui/material";
import "./Form.css";
import { useState } from "react";

export function ControlledInput(props) {
  const [isValidated, setIsValidated] = useState(true);
  return (
    <TextField
      fullWidth
      error={!isValidated}
      helperText={isValidated ? undefined : props.validationText}
      label={props.label}
      size="medium"
      type="email"
      value={props.value}
      onChange={props.onChange}
      onBlur={() => {
        if (props.validationFn) setIsValidated(props.validationFn(props.value));
      }}
    />
  );
}
