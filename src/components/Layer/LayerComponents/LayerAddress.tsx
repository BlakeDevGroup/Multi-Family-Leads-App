import { TextInput, Text, Box } from "grommet";
import { useState } from "react";
import "../Layer.css";

export default function LayerInput(props) {
  const [isValidated, setIsValidated] = useState(true);
  return (
    <Box
      className="input-text"
      fill={props.fill}
      margin={{ bottom: "xsmall" }}
      border={{ color: "#e9ecf1", size: "small" }}
      pad="8px"
      round={{ size: "8px" }}
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
        className={`text-input mf-layer__input-text ${
          isValidated ? "" : "input-not-validated"
        }`}
        value={props.value}
        onChange={props.onChange}
        onBlur={() => {
          if (props.validationFn) {
            setIsValidated(props.validationFn(props.value));
          }
        }}
      />
      <Text
        color="#f44336"
        textAlign="start"
        size="xsmall"
        margin={{ left: "5px" }}
        className="input-header"
        style={{
          visibility: `${isValidated ? "hidden" : "visible"}`,
          whiteSpace: "nowrap",
        }}
      >
        {props.validationText}
      </Text>
    </Box>
  );
}
