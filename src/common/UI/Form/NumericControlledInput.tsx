import { TextField } from "@mui/material";
import "./Form.css";
import { useEffect, useState } from "react";
import React from "react";
import NumberFormat from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<NumberFormat<number>, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
);

export function NumericControlledInput(props) {
  const [isValidated, setIsValidated] = useState(true);

  return (
    <TextField
      fullWidth
      error={!isValidated}
      helperText={isValidated ? undefined : props.validationText}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      onBlur={() => {
        if (props.validationFn) setIsValidated(props.validationFn(props.value));
      }}
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom as any,
      }}
    />
    // <TextField
    //   fullWidth
    //   error={!isValidated}
    //   helperText={isValidated ? undefined : props.validationText}
    //   label={props.label}
    //   value={value}
    //   onChange={(e) => {
    //     setValue(e.target.value);
    //     props.onChange(e.target.value);
    //   }}
    //   onBlur={() => {
    //     setValue(formatter.format(value.replace(/[^0-9.]/g, "")));
    //     if (props.validationFn) setIsValidated(props.validationFn(props.value));
    //   }}
    // />
  );
}
