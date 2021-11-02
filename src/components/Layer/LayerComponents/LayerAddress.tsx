import { TextInput, Text, Box } from "grommet";

export default function LayerAddress(props) {
  return (
    <Box>
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
