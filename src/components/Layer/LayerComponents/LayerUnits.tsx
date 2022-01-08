import { Box, TextInput, Text } from "grommet";

export default function LayerUnits(props) {
  return (
    <Box
      className="input-text"
      margin={{ left: "small", top: "medium" }}
      border={{ color: "#e9ecf1", size: "small" }}
      pad="4px"
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
        className="units"
        value={props.value}
        onChange={props.onChange}
      />
    </Box>
  );
}
