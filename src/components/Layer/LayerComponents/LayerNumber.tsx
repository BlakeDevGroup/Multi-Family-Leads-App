import { TextInput, Text, Box } from "grommet";
import "../Layer.css";
import { useState } from "react";

export default function LayerNumber(props) {
  const [isValidated, setIsValidated] = useState(true);
  return (
    <Box
      className="input-text"
      width="100%"
      margin={{ right: "xsmall" }}
      border={{ color: "#e9ecf1", size: "small" }}
      pad={{ top: "2px", left: "3px", right: "3px" }}
    >
      <Text
        color="#99A3C0"
        textAlign="start"
        size="xsmall"
        margin={{ left: "5px" }}
        className="input-header"
      >
        {props.text}
      </Text>
      <TextInput
        size="medium"
        plain
        textAlign="start"
        placeholder={props.placeholder}
        height="auto"
        className={`text-input mf-layer__input-text 
        ${isValidated ? "" : "input-not-validated"}`}
        type=""
        value={formatPhoneNumber(props.value)}
        onChange={(e) => {
          props.onChange(e.target.value.replace(/\D/g, ""));
        }}
        onBlur={() => {
          if (props.validationFn)
            setIsValidated(props.validationFn(props.value));
        }}
      />
      <Text
        color="#f44336"
        textAlign="start"
        size="xsmall"
        margin={{ left: "5px" }}
        className="input-header"
        style={{ visibility: `${isValidated ? "hidden" : "visible"}` }}
      >
        {props.validationText}
      </Text>
    </Box>
  );
}

function formatPhoneNumber(value) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value;

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, "");

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length;

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early

  if (phoneNumberLength < 4) return phoneNumber;

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}
