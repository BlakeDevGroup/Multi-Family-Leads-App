import { TextInput, Text, Box, defaultProps } from "grommet";

export default function LeftLayerInput(props) {
  return (
    <Box
      margin="xsmall"
      fill
      elevation="medium"
      round
      border={{ color: "#EEF1F7", size: "small" }}
    >
      <Text color="#99A3C0" margin="small" textAlign="start">
        {props.text}
      </Text>
      <TextInput
        plain
        className="data-table"
        textAlign="start"
        placeholder={props.placeholder}
      />
    </Box>
  );
}
