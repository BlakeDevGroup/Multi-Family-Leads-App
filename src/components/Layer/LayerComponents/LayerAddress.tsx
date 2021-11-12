import { TextInput, Text, Box } from "grommet";
import "../Layer.css";

export default function LayerInput(props) {
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
        className="text-input mf-layer__input-text"
        value={props.value}
      />
    </Box>
  );
}