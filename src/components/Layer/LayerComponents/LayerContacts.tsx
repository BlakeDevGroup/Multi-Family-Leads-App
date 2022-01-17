import { TextInput, Text, Box } from "grommet";
import "../Layer.css";
import { useState } from "react";

export default function LayerInput(props) {
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
        type="email"
        value={props.value}
        onChange={props.onChange}
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
