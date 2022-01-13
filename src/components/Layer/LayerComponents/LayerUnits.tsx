import { Box, TextInput, Text } from "grommet";
import { useState } from "react";

export default function LayerUnits(props) {
  const [isValidated, setIsValidated] = useState(true);
  return (
    <Box
      className="input-text"
      margin={{ left: "small" }}
      border={{ color: "#e9ecf1", size: "small" }}
      pad={{ top: "2px", left: "2px", right: "2px" }}
      round={{ size: "8px" }}
      width="xsmall"
    >
      <Text
        color="#99A3C0"
        textAlign="center"
        size="xsmall"
        margin={{ left: "5px" }}
        className="input-header"
      >
        Units
      </Text>
      <TextInput
        size="medium"
        plain
        textAlign="center"
        // height="auto"
        className={`units ${isValidated ? "" : "input-not-validated"}`}
        value={props.value}
        onChange={props.onChange}
        onBlur={() => {
          console.log(props.value, props.validationFn(props.value));
          setIsValidated(props.validationFn(props.value));
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
